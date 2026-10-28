// Motion for "Watch your clips become an ad" (ClipsToAd.astro). Loaded only on
// wide screens with motion allowed. Swaps the static four steps for the
// editing suite, pins the section and scrubs one timeline with the scroll.
// gsap.matchMedia puts everything back if the window narrows or the visitor
// turns on reduced motion.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FPS = 30;
const LENGTH = 30; // seconds on the timeline ruler
const pad = (n: number) => String(n).padStart(2, "0");
const timecode = (t: number) => {
  const f = Math.round(t * FPS);
  const s = Math.floor(f / FPS);
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f % FPS)}`;
};

export function mountSuite(suite: HTMLElement, query: string) {
  const list = suite.querySelector<HTMLElement>("[data-suite-list]");
  const copy = suite.querySelector<HTMLElement>("[data-suite-copy]");
  const panel = suite.querySelector<HTMLElement>("[data-suite-panel]");
  if (!list || !copy || !panel) return;

  const all = (selector: string) => Array.from(panel.querySelectorAll<HTMLElement>(selector));
  const one = (selector: string) => panel.querySelector<HTMLElement>(selector);
  const beats = Array.from(copy.querySelectorAll<HTMLElement>("[data-beat]"));
  const clips = all("[data-bin-clip]");
  const segs = all("[data-seg]");
  const chips = all("[data-chip]");
  const frames = all("[data-frame]");
  const exports = all("[data-export]");
  const wave = panel.querySelector<SVGPathElement>("[data-wave]");
  const rail = one("[data-rail]");
  const playhead = one("[data-playhead]");
  const readout = one("[data-suite-tc]");
  const viewer = one("[data-viewer]");
  const idle = one("[data-idle]");
  const finished = one("[data-final]");
  const labelProgram = one("[data-label-program]");
  const labelDone = one("[data-label-done]");
  if (!wave || !rail || !playhead || !readout || !viewer || !idle || !finished || !labelProgram || !labelDone) return;

  // Centre of an element relative to the panel. Offsets ignore transforms, so
  // they stay true while a clip is mid-flight and after a resize.
  const centre = (el: HTMLElement) => {
    let x = 0;
    let y = 0;
    let node: HTMLElement | null = el;
    while (node && node !== panel) {
      x += node.offsetLeft;
      y += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }
    return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
  };
  // Where each clip starts on the 0 to 1 timeline, from its slot's left edge.
  const starts = segs.map((seg) => parseFloat(seg.parentElement?.style.left ?? "0") / 100);

  const mm = gsap.matchMedia();
  mm.add(query, () => {
    suite.classList.add("is-armed");
    list.classList.add("sr-only");
    copy.hidden = false;
    panel.hidden = false;

    const waveLength = wave.getTotalLength();
    gsap.set(beats.slice(1), { autoAlpha: 0, y: 16 });
    clips.forEach((clip) => gsap.set(clip, { rotation: Number(clip.dataset.r) || 0 }));
    gsap.set(segs, { clipPath: "inset(0% 50% 0% 50%)" });
    gsap.set(chips, { autoAlpha: 0, scale: 0.6 });
    gsap.set(wave, { strokeDasharray: waveLength, strokeDashoffset: waveLength });
    gsap.set([...frames, finished, labelDone], { autoAlpha: 0 });
    gsap.set(exports, { autoAlpha: 0, y: 6 });

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: suite,
        start: "top top",
        end: "+=260%",
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    // The copy column: each line overlaps the next, so it is never empty,
    // and the last one holds.
    const beatAt = [0, 2.1, 4.5, 8.4];
    beats.forEach((beat, i) => {
      if (i > 0) tl.to(beat, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, beatAt[i]);
      if (i < beats.length - 1) tl.to(beat, { autoAlpha: 0, y: -16, duration: 0.4, ease: "power2.in" }, beatAt[i + 1] - 0.2);
    });

    // 1. Each clip drops from the bin onto its slot, then the cut fills the slot.
    clips.forEach((clip, i) => {
      const seg = segs[i];
      if (!seg) return;
      const at = 0.6 + i * 0.9;
      tl.to(
        clip,
        {
          x: () => centre(seg).x - centre(clip).x,
          y: () => centre(seg).y - centre(clip).y,
          rotation: 0,
          scale: () => seg.offsetHeight / clip.offsetHeight,
          duration: 1.1,
        },
        at,
      )
        .to(seg, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power3.out" }, at + 0.95)
        .to(clip, { autoAlpha: 0, duration: 0.25 }, at + 1);
    });

    // 2. Captions pop onto the caption track. 3. The waveform draws.
    chips.forEach((chip, i) => tl.to(chip, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" }, 4.7 + i * 0.32));
    tl.to(wave, { strokeDashoffset: 0, duration: 1.6, ease: "none" }, 5.2);

    // 4. The playhead plays the sequence with a running timecode, and the
    // viewer shows each finished shot as the playhead reaches it.
    const SWEEP = 6.9;
    const RUN = 2.6;
    const clock = { t: 0 };
    tl.to(playhead, { x: () => rail.offsetWidth, duration: RUN, ease: "none" }, SWEEP).to(
      clock,
      { t: LENGTH, duration: RUN, ease: "none", onUpdate: () => void (readout.textContent = timecode(clock.t)) },
      SWEEP,
    );
    tl.set(idle, { autoAlpha: 0 }, SWEEP);
    frames.forEach((frame, i) => tl.set(frame, { autoAlpha: 1 }, SWEEP + (starts[i] ?? 0) * RUN));

    // 5. It resolves on the finished ad, ready in every format, and holds.
    tl.to(finished, { autoAlpha: 1, duration: 0.35 }, SWEEP + RUN + 0.3)
      .to(viewer, { borderColor: "#c4a452", duration: 0.3 }, "<")
      .to(labelProgram, { autoAlpha: 0, duration: 0.25 }, "<")
      .to(labelDone, { autoAlpha: 1, duration: 0.25 }, "<0.1")
      .to(exports, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.12, ease: "power2.out" }, "<0.05")
      .to({}, { duration: 0.8 });

    return () => {
      suite.classList.remove("is-armed");
      list.classList.remove("sr-only");
      copy.hidden = true;
      panel.hidden = true;
      readout.textContent = timecode(0);
    };
  });

  // Webfonts change line heights; measure again once they are in.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
