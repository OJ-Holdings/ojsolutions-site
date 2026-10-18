"""
Regenerates the logo mark, favicons, and social share image from logo.png.

You only need this if logo.png changes. Requires Python 3 and Pillow
(pip install pillow), and run `npm install` first so the fonts exist.

    python scripts/brand-assets.py

Outputs:
  src/assets/brand/oj-mark.png   mark with transparent background, empty margin trimmed
  public/favicon.ico             16, 32, 48 px
  public/favicon-32.png          32 px
  public/apple-touch-icon.png    180 px
  public/icon-512.png            512 px
  public/og-image.png            1200 x 630 social share image

The logo design is never changed. The script only removes the plain white
background around it and resizes it.
"""
import statistics
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "node_modules" / "@fontsource"
NAVY = (11, 31, 58)
GOLD = (196, 164, 82)
WHITE = (255, 255, 255)


def extract_mark(src: Path) -> Image.Image:
    """Turn the white background transparent, keeping the two ink colors exact."""
    im = Image.open(src).convert("RGB")
    w, h = im.size
    px = im.load()
    navy_s, gold_s = [], []
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if max(r, g, b) < 70:
                navy_s.append((r, g, b))
            elif r > 180 and 140 < g < 180 and b < 100:
                gold_s.append((r, g, b))
    med = lambda s: tuple(int(statistics.median(c)) for c in zip(*s))
    inks = [med(navy_s), med(gold_s)]

    def project(p, ink):
        d = [255 - p[i] for i in range(3)]
        v = [255 - ink[i] for i in range(3)]
        a = sum(d[i] * v[i] for i in range(3)) / sum(v[i] * v[i] for i in range(3))
        a = max(0.0, min(1.0, a))
        err = sum((255 - a * v[i] - p[i]) ** 2 for i in range(3))
        return a, err

    out = Image.new("RGBA", (w, h))
    op = out.load()
    for y in range(h):
        for x in range(w):
            p = px[x, y]
            best = min(((*project(p, ink), ink) for ink in inks), key=lambda t: t[1])
            a, _, ink = best
            a = 1.0 if a > 0.97 else 0.0 if a < 0.03 else a
            op[x, y] = ink + (round(a * 255),)
    l, t, r, b = out.getchannel("A").getbbox()
    m = 8  # small even margin so edges never touch the image border
    return out.crop((l - m, t - m, r + m, b + m))


def tile(mark: Image.Image, size: int, fill: float) -> Image.Image:
    """Center the mark on a white square. fill = share of the square the mark may use."""
    canvas = Image.new("RGBA", (size, size), WHITE + (255,))
    box = round(size * fill)
    scale = min(box / mark.width, box / mark.height)
    m = mark.resize((round(mark.width * scale), round(mark.height * scale)), Image.LANCZOS)
    canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return canvas


def og_image(mark: Image.Image) -> Image.Image:
    W, H = 1200, 630
    img = Image.new("RGBA", (W, H), NAVY + (255,))
    d = ImageDraw.Draw(img)
    mont = lambda wt, sz: ImageFont.truetype(str(FONTS / "montserrat" / "files" / f"montserrat-latin-{wt}-normal.woff"), sz)
    pad = 88
    # Logo: the mark always sits on white, so it gets a white tile
    t = 112
    d.rounded_rectangle((pad, pad, pad + t, pad + t), radius=8, fill=WHITE)
    s = min((t - 28) / mark.width, (t - 28) / mark.height)
    m = mark.resize((round(mark.width * s), round(mark.height * s)), Image.LANCZOS)
    img.alpha_composite(m, (pad + (t - m.width) // 2, pad + (t - m.height) // 2))
    # Wordmark: OJ bold, Solutions medium
    f_oj, f_sol = mont(700, 44), mont(500, 44)
    ty = pad + t // 2
    d.text((pad + t + 28, ty), "OJ", font=f_oj, fill=WHITE, anchor="lm")
    x2 = pad + t + 28 + d.textlength("OJ ", font=f_oj)
    d.text((x2, ty), "Solutions", font=f_sol, fill=WHITE, anchor="lm")
    # Gold rule + headline
    y = 330
    d.rectangle((pad, y, pad + 72, y + 5), fill=GOLD)
    f_h = mont(700, 62)
    d.text((pad, y + 36), "Built by business owners,", font=f_h, fill=WHITE)
    d.text((pad, y + 36 + 80), "for business owners.", font=f_h, fill=GOLD)
    return img.convert("RGB")


def main():
    mark = extract_mark(ROOT / "logo.png")
    (ROOT / "src" / "assets" / "brand").mkdir(parents=True, exist_ok=True)
    mark.save(ROOT / "src" / "assets" / "brand" / "oj-mark.png", optimize=True)
    pub = ROOT / "public"
    tile(mark, 32, 0.9).convert("RGB").save(pub / "favicon-32.png", optimize=True)
    tile(mark, 180, 0.76).convert("RGB").save(pub / "apple-touch-icon.png", optimize=True)
    tile(mark, 512, 0.76).convert("RGB").save(pub / "icon-512.png", optimize=True)
    tile(mark, 48, 0.9).convert("RGB").save(pub / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    og_image(mark).save(pub / "og-image.png", optimize=True)
    print("Brand assets written.")


if __name__ == "__main__":
    main()
