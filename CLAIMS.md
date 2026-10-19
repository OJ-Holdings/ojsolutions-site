# Claims to confirm

Every factual claim the site makes today, from the claims audit run in October 2026 on the redesign branch. Confirm each one is true before the redesign ships. Nothing here has been acted on yet.

59 claims: 7 high risk, 26 medium, 26 low. Items marked HIDDEN are coded but don't show on the live site yet, because a config value is empty.

## High risk

1. **"Everything we sell, we built for our own business first."**
   - Where: Home (/), section "We run businesses too"; src/pages/index.astro:123
   - Type: about us
   - Confirm: Confirm all three services ran in your own business before you sold them: (1) an AI receptionist on the pressure washing / window cleaning company's phone line, (2) a website you built for that company, (3) commercials you made for it. Nothing on the site backs this up today. WEBSITE_EXAMPLES, COMMERCIAL_EXAMPLES and DEMO_AUDIO_SRC are all empty, and the YouTube channel has no videos. The sentence also says "our own business" (singular), while the sentence before it says "businesses" (plural).

2. **"...and tested it there before offering it to anyone else. So when we talk about missed calls, websites, and getting seen online, we're talking about problems we deal with ourselves."**
   - Where: Home (/), "We run businesses too"; src/pages/index.astro:123-125
   - Type: about us
   - Confirm: Confirm the order of events: each service was tested in your own company before it was offered to anyone. Also confirm the company really deals with missed calls, its website, and getting seen online.

3. **"We're Jacob and Oscar. Besides OJ Solutions, we run our own businesses, including a pressure washing and window cleaning company."**
   - Where: Home (/), "We run businesses too"; src/pages/index.astro:119-120
   - Type: about us
   - Confirm: "Businesses" is plural, so it says you run at least one more business besides OJ Solutions and the pressure washing company. CLAUDE.md lists only one company, so name the other business or change the wording to singular. Also confirm that pressure washing and window cleaning are one company, that it is operating now, and that Jacob and Oscar both own or run it.

4. **"Instagram (Follow us link) / sameAs "https://www.instagram.com/ojsolutionshq""**
   - Where: Footer on every page (src/components/Footer.astro:8-11); JSON-LD sameAs on home (src/pages/index.astro:34); src/config.ts:147
   - Type: about us
   - Confirm: The link does not lead to a live profile. In headless Chrome, logged out, Instagram shows "Profile isn't available. The link may be broken, or the profile may have been removed." The control profile instagram.com/instagram loaded normally in the same browser. Instagram's profile API returned 429 (rate limited), so check on a phone. Most visitors arrive from Instagram DMs, so the handle must match the account you DM from. If it doesn't exist, fix the link or blank it in config.

5. **"TikTok (Follow us link) / sameAs "https://www.tiktok.com/@ojsolutionshq""**
   - Where: Footer on every page (src/components/Footer.astro:8-11); JSON-LD sameAs (src/pages/index.astro:34); src/config.ts:148
   - Type: about us
   - Confirm: The account does not resolve. The rendered page says "Couldn't find this account" (embedded user-detail statusCode 10221). TikTok's oEmbed returns 400 for this handle and 200 for the control @tiktok. Create the account or blank the link.

6. **"AI Receptionist That Answers Every Call / answers every call 24/7"**
   - Where: /ai-receptionist: <title> (src/pages/ai-receptionist.astro:92), meta and OG description (:93), hero subhead (:97), What's included "AI receptionist: Answers every call 24/7, answers common questions, and quotes from your pricing." (:49), step 1 "Day, night, weekend, or while you're on a job." (:34)
   - Type: product capability
   - Confirm: Confirm the GHL Voice AI setup really picks up every call around the clock: several calls at once, outages, and how call forwarding is set up. The same page also offers "If a call does get missed, the caller gets a text back", and CLAUDE.md says never to claim 100% of calls. Decide whether "answers every call" stays.

7. **"A one-time setup fee plus a flat monthly fee. We go over exact numbers on the call, after we look at how many calls you're missing."**
   - Where: /ai-receptionist FAQ "What does it cost?" (src/pages/ai-receptionist.astro:71)
   - Type: pricing/terms
   - Confirm: "Flat" says there are no usage charges. GHL Voice AI and LC Phone bill per minute and per message. Confirm OJ covers that usage, or pass it on and drop "flat". Also confirm you really look at the prospect's missed-call volume before quoting.

## Medium risk

8. **"Built by business owners, for business owners."**
   - Where: Every page: home hero (src/pages/index.astro:74), footer tagline (src/components/Footer.astro:22), og:image:alt (src/layouts/BaseLayout.astro:65), and the text baked into public/og-image.png
   - Type: about us
   - Confirm: This rests on the founders owning an operating business. Confirm the same facts as the "we run our own businesses" line.

9. **"YouTube (Follow us link) / sameAs "https://www.youtube.com/@ojsolutionshq""**
   - Where: Footer on every page (src/components/Footer.astro:8-11); JSON-LD sameAs (src/pages/index.astro:34); src/config.ts:146
   - Type: about us
   - Confirm: The channel exists (title "OJ Solutions", channel UC6sPwGm8DSepYpxbdZQ7KJg) but shows "This channel doesn't have any content". Visitors checking whether you're legit, especially from the Commercials page, land on an empty channel. Decide whether to keep the link before there are videos.

10. **"JSON-LD Organization: name "OJ Solutions", url https://ojsolutions.org/, logo /icon-512.png, email ojsolutionshq@gmail.com, founder [Person "Jacob", Person "Oscar"], sameAs [YouTube, Instagram, TikTok]"**
   - Where: Home page <script type=application/ld+json>; src/pages/index.astro:22-35, emitted by src/layouts/BaseLayout.astro:71
   - Type: about us
   - Confirm: Confirm Jacob and Oscar are both founders and are fine with being named. The founder entries are first names only. Two of the three sameAs URLs don't resolve (see above), so search engines get links to dead profiles. A telephone field appears once PHONE is set.

11. **"quotes from your prices"**
   - Where: /ai-receptionist hero subhead (src/pages/ai-receptionist.astro:97), step 2 "The AI picks up, answers their questions, quotes from your prices, and books the appointment." (:38), included (:49), meta description (:93)
   - Type: product capability
   - Confirm: Confirm the AI gives callers actual price quotes from a price list the owner provides, and say what happens when a job needs an on-site estimate. Pressure washing and window cleaning prices often depend on size.

12. **"Books the appointment onto your calendar while the caller is still on the phone."**
   - Where: /ai-receptionist, What's included "Booking to your calendar" (src/pages/ai-receptionist.astro:53); also hero (:97) "books the job on your calendar", step 3 "The appointment shows up on your calendar" (:41), meta (:93)
   - Type: product capability
   - Confirm: Confirm the voice agent books live during the call. Also say whose calendar "your calendar" means: the GHL calendar only, or synced to the owner's Google or Outlook calendar.

13. **"If a call does get missed, the caller gets a text back so they don't move on."**
   - Where: /ai-receptionist, What's included "Missed-call text-back" (src/pages/ai-receptionist.astro:57); meta description "texts back missed calls" (:93)
   - Type: product capability
   - Confirm: Confirm missed-call text-back is set up for each client. It needs A2P 10DLC registration of the client's texting number. Also check this line against the "answers every call" claim.

14. **"It transfers them to your phone or to your staff. / Anything it can't handle rings your phone."**
   - Where: /ai-receptionist FAQ "What happens with calls it can't handle?" (src/pages/ai-receptionist.astro:80); step 3 (:41)
   - Type: product capability
   - Confirm: Confirm live call transfer to the owner's phone and to staff is set up and tested in GHL Voice AI. Also say what happens when nobody answers the transfer.

15. **"We set up your CRM on GoHighLevel. Every caller is saved as a contact you can follow up with."**
   - Where: /ai-receptionist, What's included "CRM setup" (src/pages/ai-receptionist.astro:61)
   - Type: product capability
   - Confirm: Confirm each client gets a GHL sub-account under your agency plan and that every caller, including hang-ups, is saved as a contact. Also say who owns the account and the data if a client leaves.

16. **"We set it up with your services, prices, and hours, then keep it running and update it when things change."**
   - Where: /ai-receptionist, What's included "Done-for-you setup and management" (src/pages/ai-receptionist.astro:65); meta "We set it up and run it." (:93)
   - Type: process promise
   - Confirm: Confirm ongoing management and updates are included in the monthly fee, and set how quickly change requests get done.

17. **"See it answer a call / Book a short call and we'll show you how it would work for your business."**
   - Where: /ai-receptionist final CTA (src/pages/ai-receptionist.astro:100-101)
   - Type: process promise
   - Confirm: The heading promises a demo. Confirm you have a working receptionist line you can call live on a sales call.

18. **"Every call you miss is a customer who calls the next business on the list."**
   - Where: Home "What we fix" AI Receptionist card (src/lib/site.ts:22, rendered from src/pages/index.astro:94)
   - Type: stats
   - Confirm: An absolute claim that the site's own source doesn't support. The same CallRail post reports 42% leave a voicemail and only 21% immediately call another business. Consider softening it.

19. **"Pick a time that works for you. It's a short call."**
   - Where: Home "How we work" step 1 (src/pages/index.astro:40)
   - Type: process promise
   - Confirm: GHL_CALENDAR_EMBED and BOOKING_URL are both empty, so every Book a call button opens an email (mailto:ojsolutionshq@gmail.com?subject=Book a call). Visitors can't pick a time until the calendar is connected. Also confirm how long "short" is.

20. **"We look at your business and find the one thing costing you the most. / Then you decide if you want more. No package you have to buy into."**
   - Where: Home "How we work" steps 2-3 (src/pages/index.astro:44, :48)
   - Type: process promise
   - Confirm: Confirm the first call includes a look at the prospect's business, and that no bundles, minimums or term contracts are required. "Is there a long contract?" is still unanswered (FAQ_ANSWERS.receptionistContract).

21. **"ojsolutionshq@gmail.com"**
   - Where: Footer on every page (src/components/Footer.astro:29-31), Privacy/Terms contact (src/components/LegalContact.astro:26), JSON-LD email; it is also where every Book a call button sends people (src/lib/site.ts:78-94)
   - Type: process promise
   - Confirm: With no calendar connected, every booking request arrives as an email here. Confirm someone checks this inbox and replies quickly.

22. **"New sites or rebuilds. The site you're on right now is built the same way."**
   - Where: /websites "What's included" intro (src/pages/websites.astro:91)
   - Type: product capability
   - Confirm: This site doesn't yet have two of the features listed right below this line. There's no phone number, so no click-to-call, and Book a call opens an email, not a booking page. Confirm the claim, or add PHONE and the GHL calendar first.

23. **"Click-to-call and booking: Your number is one tap away, and customers can book without picking up the phone."**
   - Where: /websites included (src/pages/websites.astro:22); meta "with click-to-call and booking built in" (:67)
   - Type: deliverable
   - Confirm: Confirm which booking tool client sites use (GHL calendar or another), whether it costs the client extra, and that it's included in every build.

24. **"Hosting and launch handled: We put it live and handle the hosting. Nothing for you to set up. / We launch it: We put it live and take care of the hosting."**
   - Where: /websites included (src/pages/websites.astro:34), step 3 (:49), meta "designed, built, launched, and hosted for you" (:67)
   - Type: process promise
   - Confirm: Confirm who pays for hosting and the domain, whether hosting carries a monthly fee, who owns the site and domain if the client leaves ("Do I own the site?" is unanswered), and that clients really have nothing to set up, given DNS access is usually needed.

25. **"Filming: We handle the filming, working from a shot list we plan with you."**
   - Where: /commercials included (src/pages/commercials.astro:22); intro "We plan it, film it, and edit it." (:91); step 2 "We shoot it and cut it into versions for each place it will run." (:56)
   - Type: process promise
   - Confirm: SHOOT_AREA is empty, so nothing says where you film. Visitors from Facebook groups anywhere may read this as you coming to them. Confirm your travel area and how out-of-area clients work, plus your gear and who films.

26. **"Vertical cuts: Versions made for Reels, TikTok, and Shorts. / Ad versions for Meta: Cuts ready to run as ads on Facebook and Instagram. / A longer cut for your website: A full version to put on your site."**
   - Where: /commercials included (src/pages/commercials.astro:37, :41, :45)
   - Type: deliverable
   - Confirm: Confirm every commercial project includes all three deliverables: vertical 9:16 cuts, Meta ad versions (which aspect ratios and lengths), and a longer website cut. Also confirm you deliver the files but don't run the ads; the copy doesn't promise ad management.

27. **"This policy explains what information OJ Solutions ("we," "us") collects... / These terms cover your use of this website, run by OJ Solutions / © 2026 OJ Solutions. All rights reserved."**
   - Where: /privacy intro (src/pages/privacy.astro:30), /terms intro (src/pages/terms.astro:29), footer every page (src/components/Footer.astro:93)
   - Type: about us
   - Confirm: LEGAL_ENTITY is empty, so the policies name "OJ Solutions" as the operator. Confirm whether OJ Solutions is a registered business, an LLC or a DBA, and who legally stands behind these documents. The Terms name no governing state or jurisdiction (TODO in src/pages/terms.astro:5), and neither page gives a business address or state.

28. **"Booking and chat tools. Our booking calendar and chat are provided by a third party (GoHighLevel). Those tools may use cookies to work properly."**
   - Where: /privacy "What we collect" (src/pages/privacy.astro:45-46); /terms "Other websites and tools": "The site links to and uses tools from other companies, such as our booking calendar, chat, and social media." (src/pages/terms.astro:53)
   - Type: other
   - Confirm: Neither a booking calendar nor a chat widget is on the site today (GHL_CALENDAR_EMBED and GHL_CHAT_WIDGET are empty), and the pages load no third-party scripts. Confirm GoHighLevel is the vendor you'll use. Once /book is on, it loads link.msgsndr.com/js/form_embed.js.

29. **"If you give us your mobile number and agree to receive text messages, we may text you about your appointment, your inquiry, and our services. / Message frequency varies. / Message and data rates may apply. / Reply STOP to opt out at any time. Reply HELP for help. / Agreeing to receive texts is not a condition of buying anything from us."**
   - Where: /privacy SMS section (src/pages/privacy.astro:60-74); /terms SMS section (src/pages/terms.astro:59-69)
   - Type: pricing/terms
   - Confirm: Confirm you have a texting number registered for A2P 10DLC and that this wording matches the registered campaign. STOP and HELP must be set up and answered. "our services" covers marketing texts, so confirm where consent is collected; the site has no SMS opt-in checkbox yet.

30. **"We do not share mobile numbers or SMS opt-in consent with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are never shared with any third parties."**
   - Where: /privacy SMS (src/pages/privacy.astro:66-69) and "Who we share it with" (:81-82); /terms: "We never share mobile numbers or SMS opt-in consent with third parties or affiliates for marketing purposes." (src/pages/terms.astro:69)
   - Type: pricing/terms
   - Confirm: "Never shared with any third parties" is absolute, yet GoHighLevel/LeadConnector and the carriers necessarily handle the numbers. This is standard carrier-required language. Confirm it matches what you registered, and that you never export numbers to ad platforms such as Meta custom audiences.

31. **"We don't sell your information. We share it only with service providers that help us run our business, such as our scheduling, CRM, email, and website hosting providers, and only so they can do that work for us. We may also share information if the law requires it."**
   - Where: /privacy "Who we share it with" (src/pages/privacy.astro:79-81)
   - Type: pricing/terms
   - Confirm: List your actual vendors: GoHighLevel/LeadConnector (scheduling, CRM, SMS), Google Gmail (email), Vercel (hosting), and YouTube once commercial examples appear. Confirm nothing else gets personal data, such as a Meta pixel, ad audiences or lead tools, and that you never sell or rent data.

32. **"This website describes the services we offer. Any work we do for you is covered by a separate quote or agreement between you and us. If that agreement says something different from these terms, the agreement wins."**
   - Where: /terms "Our services" (src/pages/terms.astro:35)
   - Type: pricing/terms
   - Confirm: Confirm you have a written quote or service agreement template ready for each of the three services.

33. **"[HIDDEN: SHOW_PRICING=false] Pricing: One-time setup $1,000 / Then monthly $500/month / Includes everything above: the AI receptionist, booking, missed-call text-back, CRM setup, and ongoing management. (FAQ variant: "A one-time setup fee of $1,000, then a flat $500 a month.")"**
   - Where: /ai-receptionist pricing section (src/pages/ai-receptionist.astro:204-229) and cost FAQ (:70); values in src/config.ts:80-82. Not in the rendered HTML today.
   - Type: pricing/terms
   - Confirm: Before turning SHOW_PRICING on, confirm $1,000 setup and $500/month, and that $500 really is flat and includes all GHL usage, phone minutes and texts.

## Low risk

34. **"In a 2025 CallRail survey of 1,000 consumers: 78% said they've abandoned a business after an unanswered call. 82% said they'd call a competitor instead. Source: CallRail, 2025 consumer survey"**
   - Where: /ai-receptionist problem section (src/pages/ai-receptionist.astro:119-133); link from STATS_SOURCE_URL (src/config.ts:71-72)
   - Type: stats
   - Confirm: Checked: the source matches. The rendered CallRail post ("Why businesses can't afford to miss calls", Danielle Wood, September 25, 2025) gives both numbers. Its intro credits a CallRail survey of 1,000 U.S. consumers for the 78% (abandoned a business after an unanswered call), and its "What customers expect" list repeats that 78% took their business elsewhere. The same list says: "82% say they'll call a competitor if you don't answer." (Quoting is limited to that one sentence.) Small gaps: the post doesn't give field dates, so "2025" comes from the publish date; it says "U.S. consumers" where the site says "consumers"; and the link goes to a blog post, not the survey report.

35. **"Your ads, your website, and word of mouth all make the phone ring. When nobody picks up, that caller goes to a competitor, and the money you spent getting them to call goes with them. / Every missed call is a lead you already paid for. / Your marketing isn't broken. Your phone is."**
   - Where: /ai-receptionist problem paragraph (src/pages/ai-receptionist.astro:113-114), problem heading (:98), hero heading (:95)
   - Type: other
   - Confirm: Framing, not stats. These are sweeping statements about the visitor's business. Confirm you're comfortable with "every" and "goes to a competitor" as absolutes.

36. **"Do I have to buy all three? No. Most businesses should start with whichever one fixes their biggest problem. You can add more later if it makes sense. / How does it start? With a short call. We look at your business and tell you what we'd fix first."**
   - Where: Home FAQ (src/pages/index.astro:55, :59); final CTA "A short call. We'll tell you what we'd fix first." (:147)
   - Type: process promise
   - Confirm: Confirm each service can be bought on its own and that the first call ends with a recommendation. The site never says whether the call is free, so decide whether it should.

37. **"Three services, all done for you. Start with the one that fixes your biggest problem."**
   - Where: Home "What we fix" intro (src/pages/index.astro:83)
   - Type: process promise
   - Confirm: Confirm all three are fully done for you, including how much the client has to do for commercial shoots and website content.

38. **"We fix what's slowing your business down: missed calls, a website that doesn't bring in work, and marketing nobody watches. Built by business owners."**
   - Where: Home meta/OG/Twitter description (src/pages/index.astro:70); hero subhead variant (:76)
   - Type: about us
   - Confirm: Depends on the founder-business claim above.

39. **"We design and build it: You review it and tell us what to change before anything goes live."**
   - Where: /websites step 2 (src/pages/websites.astro:45)
   - Type: process promise
   - Confirm: Confirm the review step and whether there's a limit on revision rounds.

40. **"Custom design: Designed around your business and what you want visitors to do: call you or book. / Built for phones first: Designed for the small screen first, then scaled up for desktop. / Fast load times: Built lean, so pages load quickly on a phone. / Basic Google setup: Page titles, descriptions, and a sitemap, so Google can read your site."**
   - Where: /websites included (src/pages/websites.astro:14, :18, :26, :30); hero "We build fast, phone-first sites" (:71)
   - Type: deliverable
   - Confirm: Confirm client sites are custom-built, not templates, and come with titles, meta descriptions and a sitemap. If you quote speed, back it with Lighthouse numbers.

41. **"Can you redo my current site? Yes. We can rebuild the site you have or start from scratch."**
   - Where: /websites FAQ (src/pages/websites.astro:56)
   - Type: process promise
   - Confirm: Confirm you can rebuild sites from any platform (Wix, Squarespace, WordPress) and move their content and domain.

42. **"Websites That Bring In Customers / Your website should be bringing you customers."**
   - Where: /websites <title> and OG title (src/pages/websites.astro:66), hero (:69)
   - Type: product capability
   - Confirm: The title reads as a promised result, which you can't show yet with zero clients, and Terms say "We don't promise specific results". Decide if the wording is OK.

43. **"Most people find you on their phone. / If your site is slow, looks dated, or makes it hard to call or book, they don't stick around to figure it out. They go back to search and call someone else. / A slow, dated site sends visitors back to search for someone else."**
   - Where: /websites problem (src/pages/websites.astro:72, :80-83); home card (src/lib/site.ts:28)
   - Type: stats
   - Confirm: "Most people" is an unsourced statement close to a statistic. Confirm you're comfortable with it, or soften it.

44. **"Planning the concept: We work out the idea, the message, and the shots with you before anything gets filmed. / Editing: We edit the footage into finished commercials and short ads. / You get final cuts: Ready to post and ready to run as ads."**
   - Where: /commercials included (src/pages/commercials.astro:28, :33), step 3 (:60), meta "We plan the idea, film it, and edit it into cuts ready to post." (:74)
   - Type: process promise
   - Confirm: Confirm a planning session comes before every shoot and that edits are delivered ready to post.

45. **"People scroll past photos. They stop for video. / If you're only posting photos, or not posting at all, you're invisible in the feed while your competitors show up. / If you're not posting video, people scroll right past you."**
   - Where: /commercials hero (src/pages/commercials.astro:76), problem (:86); home card (src/lib/site.ts:34)
   - Type: other
   - Confirm: Unsourced generalizations, with no numbers. Confirm you're comfortable stating them as fact.

46. **"What you give us. When you book a call, fill out a form, text us, or email us, we collect what you share, such as your name, email, phone number, business name, and what you tell us about your business."**
   - Where: /privacy (src/pages/privacy.astro:37-38)
   - Type: other
   - Confirm: Today the site has no form and no published phone number to text. Email is the only channel. Confirm the list is meant to cover the channels you're about to add.

47. **"Basic technical information. Like most websites, our hosting provider may log basic details such as your IP address, browser type, and the pages you visit, to keep the site running and secure."**
   - Where: /privacy (src/pages/privacy.astro:41-42)
   - Type: other
   - Confirm: The host is Vercel. Confirm Vercel Web Analytics and Speed Insights are off; the code has no analytics package. If you add analytics, a Meta pixel or GA, update this section.

48. **"We keep your information for as long as we need it to work with you and to meet legal or accounting requirements. After that, we delete it."**
   - Where: /privacy "How long we keep it" (src/pages/privacy.astro:87-88)
   - Type: process promise
   - Confirm: Confirm you actually delete old contacts from GHL and old Gmail threads, and how long you keep them.

49. **"You can ask us what information we have about you, ask us to correct it, or ask us to delete it. Just reach out using the contact details below. You can stop text messages at any time by replying STOP."**
   - Where: /privacy "Your choices" (src/pages/privacy.astro:93-95)
   - Type: process promise
   - Confirm: Confirm one of you handles access and deletion requests sent to ojsolutionshq@gmail.com.

50. **"To respond to you and schedule calls. / To provide the services you ask for. / To send you messages you've agreed to receive, including texts and emails about your appointment or inquiry. / To keep our website working and secure."**
   - Where: /privacy "How we use it" (src/pages/privacy.astro:52-55)
   - Type: other
   - Confirm: Confirm these are the only uses, for example no retargeting ads built from contact lists. Calls to your own number answered or recorded by the AI aren't covered yet (TODO at src/pages/privacy.astro:5-6). That doesn't matter while PHONE is empty, but it must be added before a number goes live.

51. **"This website is meant for businesses. It's not directed to children under 13, and we don't knowingly collect their information. / Last updated: October 17, 2026"**
   - Where: /privacy (src/pages/privacy.astro:99, :12); /terms Last updated (src/pages/terms.astro:12)
   - Type: other
   - Confirm: Confirm the date. Both files are marked as an unreviewed template (TODO: have a lawyer review it).

52. **"The text, design, logo, videos, and other content on this site belong to us. Please don't copy or reuse them without our permission."**
   - Where: /terms "Our content" (src/pages/terms.astro:47)
   - Type: pricing/terms
   - Confirm: Confirm you own the logo, including a rights assignment if someone else designed it. The social icons (Simple Icons, CC0, with YouTube, Instagram and TikTok trademarks) and the Montserrat and Inter fonts are third-party. The site has no videos yet.

53. **"We work hard to keep the information on this site accurate, but it's provided "as is." We don't promise specific results from using the site, except where we've agreed to something in writing. / To the extent the law allows, we're not liable for indirect or unexpected losses that come from using this website. / Carriers are not responsible for delayed or undelivered messages."**
   - Where: /terms "No guarantees", "Limits on liability", SMS (src/pages/terms.astro:76, :82, :67)
   - Type: pricing/terms
   - Confirm: Have a lawyer review it. No governing law is named. Note the tension with outcome-style titles such as "Websites That Bring In Customers" and with GUARANTEE_TEXT if one is added.

54. **"[HIDDEN: DEMO_AUDIO_SRC empty] Hear a real call / A real call to our AI receptionist, recorded on our own system. / Will it sound like a robot? Don't take our word for it. Listen to the real call above."**
   - Where: /ai-receptionist (src/pages/ai-receptionist.astro:106, :151-152, :76)
   - Type: product capability
   - Confirm: When you add audio, confirm it's a real, unedited call to your own system, and that the caller agreed to the recording and its publication (some states require consent from everyone on the call).

55. **"[HIDDEN: DEMO_VIDEO_SRC empty] See what a booked call looks like / Screen recording: the calendar event and the contact card the call created."**
   - Where: /ai-receptionist (src/pages/ai-receptionist.astro:151, :181)
   - Type: product capability
   - Confirm: When you add it, confirm the recording shows the real event and contact created by that call, and blur caller personal data.

56. **"[HIDDEN: SHOOT_AREA empty] Filming on site: We come to you and film on site anywhere in {SHOOT_AREA}."**
   - Where: /commercials (src/pages/commercials.astro:18)
   - Type: process promise
   - Confirm: Set the real travel area, and answer FAQ_ANSWERS.commercialsComeToUs for clients outside it.

57. **"[HIDDEN: WEBSITE_PRICE_FROM / COMMERCIAL_PRICE_FROM null] Starting at {price}. The exact price depends on what your site/project needs. We'll give you a number after a quick call."**
   - Where: /websites and /commercials Pricing (src/components/PriceFrom.astro:23-27). Today it renders "Every site is different, so we quote after a quick call." and "Every project is different, so we quote after a quick call." (:30)
   - Type: pricing/terms
   - Confirm: Confirm that you quote after a call. If you set starting prices, confirm them before publishing.

58. **"[HIDDEN: /book not built, GHL_CALENDAR_EMBED empty] Book a call / Pick a time that works for you. We'll look at your business and tell you what we'd fix first. (meta: "Pick a time for a short call with OJ Solutions. We'll look at your business and tell you what we'd fix first.")"**
   - Where: src/pages/book/[...path].astro:20, :29 (the route returns 404 today)
   - Type: process promise
   - Confirm: Same process promise as on the home page. Confirm it once the calendar is connected.

59. **"[HIDDEN: WEBSITE_EXAMPLES, COMMERCIAL_EXAMPLES, FOUNDERS_PHOTO empty] Our work (website cards / commercial videos) and the founders photo"**
   - Where: src/components/WebsiteExamples.astro, src/components/CommercialExamples.astro, src/pages/index.astro:129-139; the config comment suggests "Booking site for our own pressure washing business." (src/config.ts:93, comment only)
   - Type: deliverable
   - Confirm: List only your own real projects. Does the pressure washing company have a website and commercials you made? If so, adding them would back up the "built for our own business first" claim.

## Writing-rule notes from the same audit

- Borderline, the 100% rule: "answers every call 24/7" / "AI Receptionist That Answers Every Call" appears in the /ai-receptionist <title> and OG title (src/pages/ai-receptionist.astro:92), meta description (:93), hero subhead (:97) and What's included (:49). CLAUDE.md's business description uses "answers every call 24/7", but its writing rules say never claim the AI answers 100% of calls. The same page also says "If a call does get missed, the caller gets a text back" (:57). Related absolute: "Every caller is saved as a contact" (:61).
- Possible invented fact ("Never invent anything... Do not guess"): the home page says "we run our own businesses" (plural) (src/pages/index.astro:119). CLAUDE.md documents only one business besides OJ Solutions, the pressure washing and window cleaning company.
- Possible conflict with "if a config value is empty, hide whatever depends on it": /privacy says "Our booking calendar and chat are provided by a third party (GoHighLevel)" (src/pages/privacy.astro:45-46), and /terms mentions "our booking calendar, chat" (src/pages/terms.astro:53). GHL_CALENDAR_EMBED and GHL_CHAT_WIDGET are both empty, so neither exists on the site.
- Not violations, checked and clean: no em dashes or en dashes in the rendered HTML of /, /ai-receptionist, /websites, /commercials, /privacy, /terms and 404 (attributes included), or anywhere in src/. None of the banned words (leverage, seamless, cutting-edge, revolutionize, game-changer, unlock, elevate, supercharge, fast-paced). No testimonials, reviews, ratings, client logos or "trusted by" claims. The CallRail stats appear only on /ai-receptionist with a visible source link, and the source confirms both numbers. No gold text on white: text-gold is used only on the FeatureGrid check icons (src/components/FeatureGrid.astro:16), an allowed accent. Gold elsewhere is underlines, rules, the ::selection background, and the button on the navy final CTA. No competitors or agencies are criticized.
