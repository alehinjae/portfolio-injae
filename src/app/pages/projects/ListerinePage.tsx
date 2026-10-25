import { motion } from "framer-motion";
import { Link } from "react-router";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import { Scrollspy } from "../../components/design-system/Scrollspy";
import type { ReactNode } from "react";

import imgKv from "../../../imports/listerine/Xxs6AIQpRBYZvW9F.webp";
import imgCalToday from "../../../imports/listerine/v3/cal-today.webp";
import imgCalWon from "../../../imports/listerine/v3/cal-won.webp";
import imgCalMissed from "../../../imports/listerine/v3/cal-missed.webp";
import imgCalDone from "../../../imports/listerine/v3/cal-done.webp";
import imgBottleFull from "../../../imports/listerine/v3/bottle-full.webp";
import imgModalWin from "../../../imports/listerine/v3/modal-win.webp";
import imgModalLose from "../../../imports/listerine/v3/modal-lose.webp";
import imgRegisterDesk from "../../../imports/listerine/v3/register-desk.webp";
import imgConfirmMobile from "../../../imports/listerine/v3/confirm-mobile.webp";
import imgLoggedDesk from "../../../imports/listerine/v3/logged-desk.webp";
import imgSgTypography from "../../../imports/listerine/v3/sg-typography.webp";
import imgSgColors from "../../../imports/listerine/v3/sg-colors.webp";
import imgSgButtons from "../../../imports/listerine/v3/sg-buttons-forms.webp";
import imgSgComponents from "../../../imports/listerine/v3/sg-components.webp";
import imgPrizeIcons from "../../../imports/listerine/v3/prize-icons.webp";
import videoLoop from "../../../imports/listerine/v3/testar-a-sorte.mp4";
import videoPoster from "../../../imports/listerine/v3/testar-a-sorte-poster.webp";

// ─── Animation primitives ────────────────────────────────────────────────────

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

const TEAL = "#035f64";

const overview = [
  { title: "My Role", items: ["UX/UI Design", "Mechanic, journey, states & handoff"] },
  { title: "Tools", items: ["Figma", "FigJam"] },
  { title: "Team", items: ["1 UX/UI Designer", "1 UX Research", "4 Developers", "1 Project Manager"] },
  { title: "Timeline", items: ["Overall: 6+ weeks", "Design sprint: 14 days"] },
];

const SCROLLSPY_ITEMS = [
  { id: "context", label: "Context" },
  { id: "mechanic", label: "Mechanic" },
  { id: "daily-loop", label: "Daily loop" },
  { id: "client", label: "Iteration" },
  { id: "journey", label: "Journey" },
  { id: "style-guide", label: "Style guide" },
  { id: "impact", label: "Impact" },
  { id: "community", label: "Community" },
];

function SectionHeading({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <p className={`text-[12px] font-normal uppercase tracking-[0.1em] ${light ? "text-[#c3f7ff]" : "text-[#035f64]"}`}>{eyebrow}</p>
        )}
        <h2 className={`text-[34px] font-light leading-tight md:text-[52px] ${light ? "text-white" : "text-[#1f1f1f]"}`}>{title}</h2>
      </div>
    </FadeUp>
  );
}

function Lead({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <FadeUp>
      <p className={`max-w-[820px] text-[17px] font-light leading-relaxed ${light ? "text-[#d9edee]" : "text-[#5a5a5a]"}`}>{children}</p>
    </FadeUp>
  );
}

function CaseImage({ src, alt = "", caption, className = "", light = false }: { src: string; alt?: string; caption?: string; className?: string; light?: boolean }) {
  return (
    <FadeIn className={className}>
      <figure className="w-full">
        <div className="overflow-hidden rounded-[16px]">
          <img src={src} alt={alt} loading="lazy" className="w-full" />
        </div>
        {caption && <figcaption className={`mt-3 text-[13px] font-light ${light ? "text-[#c3f7ff]/80" : "text-[#8c8c8c]"}`}>{caption}</figcaption>}
      </figure>
    </FadeIn>
  );
}

function StatCard({ value, label, light = false }: { value: string; label: string; light?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 rounded-[16px] p-6 ${light ? "border border-white/20" : "bg-[#f5f5f5]"}`}>
      <p className={`text-[34px] font-light ${light ? "text-white" : "text-[#035f64]"}`}>{value}</p>
      <p className={`text-[14px] font-light leading-relaxed ${light ? "text-[#d9edee]" : "text-[#5a5a5a]"}`}>{label}</p>
    </div>
  );
}

function Comment({ handle, text, meta }: { handle: string; text: string; meta?: string }) {
  return (
    <div className="flex gap-3 rounded-[14px] border border-[#e5e5e5] bg-white p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d9edee] text-[13px] font-normal text-[#035f64]">
        {handle[1].toUpperCase()}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[12px] text-[#1f1f1f]">
          {handle} <span className="font-light text-[#8c8c8c]">· 3 years ago</span>
        </p>
        <p className="text-[14px] font-normal leading-relaxed text-[#1f1f1f]">{text}</p>
        {meta && <p className="text-[12px] font-light text-[#8c8c8c]">{meta}</p>}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ListerinePage() {
  return (
    <main className="bg-white font-light text-[#1f1f1f]">
      <Scrollspy items={SCROLLSPY_ITEMS} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ backgroundColor: TEAL }}>
        <ContentContainer className="pt-16 md:pt-24">
          <div className="grid items-end gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-7 pb-14 md:pb-24">
              <motion.p
                className="text-[13px] font-normal uppercase tracking-[0.1em] text-white/60"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.1 }}
              >
                Johnson &amp; Johnson · LISTERINE® · 2022
              </motion.p>
              <motion.h1
                className="text-[38px] font-light leading-[1.12] text-white md:text-[56px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                21 Day Challenge: turning a promotion into a 21-visit habit
              </motion.h1>
              <motion.p
                className="text-[17px] font-light leading-relaxed text-[#d9edee] md:text-[19px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.15 }}
              >
                LISTERINE® asked people to use the product for 21 days. I designed the mechanic, the journey and the
                states of the digital experience that had to bring them back every day, one chance per day.
              </motion.p>
              <motion.div
                className="rounded-[16px] bg-white/[0.08] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
              >
                <p className="text-[34px] font-light text-white">#1</p>
                <p className="mt-1 text-[14px] font-light leading-relaxed text-[#d9edee]">
                  most accessed promotion of the week on Portal da Promo, a Brazilian promotions aggregator
                  (#DataDriven ranking, week ending Oct 25, 2022, 18 days after launch)
                </p>
              </motion.div>
            </div>
            <motion.div
              className="hidden grid-cols-2 items-end gap-5 md:grid"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
            >
              <div className="h-[560px] overflow-hidden rounded-t-[18px] shadow-2xl">
                <img src={imgCalToday} alt="Challenge calendar, today's state" className="w-full" />
              </div>
              <div className="h-[500px] overflow-hidden rounded-t-[18px] shadow-2xl">
                <img src={imgCalMissed} alt="Challenge calendar, missed day state" className="w-full" />
              </div>
            </motion.div>
          </div>
        </ContentContainer>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[96px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-[56px]">
          {overview.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08} className="flex flex-col gap-3 border-t border-[#e3e3e3] pt-6">
              <p className="text-[16px] font-normal text-[#1f1f1f]">{item.title}</p>
              <ul className="flex flex-col gap-1 text-[14px] font-light text-[#5a5a5a]">
                {item.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </FadeUp>
          ))}
        </div>
      </ContentContainer>

      {/* ── 01 Context ────────────────────────────────────────────────────── */}
      <section id="context">
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="01 · Context" title="A promotion that asked for 21 visits, not one click" />
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <FadeUp className="flex flex-col gap-5 text-[17px] font-light leading-relaxed text-[#5a5a5a]">
                <p>
                  Johnson &amp; Johnson wanted LISTERINE® to stop being an occasional purchase and become routine. The
                  campaign built on the idea that 21 days form a habit: register a receipt and get 21 chances at an
                  instant prize, one per day.
                </p>
                <p>
                  For the brand, a confusing journey meant receipts registered and abandoned by day three. For
                  participants, the daily question needed an immediate answer:{" "}
                  <strong className="font-normal text-[#1f1f1f]">what do I do today, what happens if I forget, and how much is left?</strong>
                </p>
              </FadeUp>
              <div className="flex flex-col gap-3">
                {[
                  ["1 receipt = 21 chances", "one chance per day, starting on the day of registration"],
                  ["Up to 3 receipts per person", "each receipt opens its own 21-day cycle"],
                  ["500 instant prizes", "280 prepaid cards + 220 electronics and lifestyle items"],
                  ["A missed day doesn't eliminate you", "you only lose that day's chance"],
                ].map(([t, d], i) => (
                  <FadeUp key={t} delay={i * 0.06}>
                    <div className="rounded-[12px] bg-[#f5f5f5] px-6 py-5">
                      <p className="text-[18px] font-normal" style={{ color: TEAL }}>{t}</p>
                      <p className="mt-1 text-[14px] font-light text-[#5a5a5a]">{d}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <CaseImage src={imgKv} alt="LISTERINE® 21 Day Challenge key visual" caption="The key visual already existed. The UX work was to turn the challenge into a product." />
          </div>
        </ContentContainer>
      </section>

      {/* ── 02 Insight ────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="02 · Insight" title="The calendar is the product" />
              <Lead>
                If progress didn't show up as daily use, the challenge would turn into "spin whenever I remember". The
                interface had to make the habit readable: where I am, what today unlocks, what missing a day costs, and
                that missing a day doesn't take me out of the challenge.
              </Lead>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#8c8c8c]">From the internal brief (translated)</p>
              {[
                "“21 days is the standard number of days to build a habit.”",
                "“As soon as people land on the site, make it very clear how the challenge works.”",
                "A calendar in the account to show how often the product is used.",
                "A daily interaction that shows whether you won that day or not.",
              ].map((q, i) => (
                <FadeUp key={q} delay={i * 0.06}>
                  <div className="rounded-[12px] border-l-[3px] bg-white px-6 py-5 text-[16px] font-light leading-relaxed text-[#1f1f1f]" style={{ borderColor: TEAL }}>
                    {q}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 03 Mechanic ───────────────────────────────────────────────────── */}
      <section id="mechanic">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="03 · Mechanic decision" title="Forgiveness over punishment" />
            <Lead>
              The first hypotheses on the board were stricter and more fragile. The rule that shipped trades artificial
              scarcity for real return visits.
            </Lead>
            <FadeUp>
              <div className="overflow-x-auto rounded-[16px] border border-[#e5e5e5]">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-[#f5f5f5] text-[11px] font-normal uppercase tracking-[0.08em] text-[#8c8c8c]">
                    <tr>
                      <th className="px-6 py-4 font-normal">Early hypothesis</th>
                      <th className="px-6 py-4 font-normal">Why it was dropped</th>
                      <th className="px-6 py-4 font-normal">Rule that shipped</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] leading-relaxed">
                    {[
                      ["Hard streak: forget one day and you're out.", "Feels rigorous, but punishes real life and empties the challenge in the first week.", "21 consecutive days of chances. A missed day only loses that day's chance; you keep going."],
                      ["More receipts = more spins on the same day.", "Inflates daily spins, turns it into a lottery and weakens the one-day-at-a-time habit.", "One chance per day per receipt. Each receipt (up to 3 per person) opens its own 21-day cycle."],
                      ["“Rigged” wheel vs. “official” wheel.", "Perceived fairness: the result must feel credible to someone coming back every day.", "Instant prizes from a distribution grid validated by the regulator, shown right in the modal."],
                    ].map(([a, b, c]) => (
                      <tr key={a} className="border-t border-[#e5e5e5] align-top">
                        <td className="px-6 py-5 font-light text-[#1f1f1f]">{a}</td>
                        <td className="px-6 py-5 font-light text-[#5a5a5a]">{b}</td>
                        <td className="px-6 py-5 font-normal" style={{ color: TEAL }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </ContentContainer>
      </section>

      {/* ── 04 Daily loop ─────────────────────────────────────────────────── */}
      <section id="daily-loop" className="bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="04 · The daily loop" title="One cup a day: the habit became the interface" />
            <Lead>
              Each receipt becomes a calendar of 21 cups. Empty, full or starred: the metaphor says "I used the product
              today", not just an abstract checkmark. On arrival, today's card opens with a single action.
            </Lead>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                [imgCalToday, "A · Today", "Today opens with a single action: “Try my luck today”."],
                [imgCalWon, "B · Won", "The prize shows up in the day's card, and the cup gets a star."],
                [imgCalMissed, "C · Missed day", "“What a pity… but don't give up”: the day passes, the challenge goes on."],
                [imgCalDone, "D · Day completed", "No prize, but progress: “A habit changes your breath”."],
              ].map(([src, t, d], i) => (
                <FadeUp key={t} delay={i * 0.06} className="flex flex-col gap-3">
                  <div className="h-[420px] overflow-hidden rounded-[16px] md:h-[560px]">
                    <img src={src} alt={t} loading="lazy" className="w-full" />
                  </div>
                  <p className="text-[15px] font-normal" style={{ color: TEAL }}>{t}</p>
                  <p className="text-[14px] font-light leading-relaxed text-[#5a5a5a]">{d}</p>
                </FadeUp>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Cups instead of checkmarks", "Checkmarks are faster to build. Cups need illustration and four states, but they speak the product's language.", "Cup calendar approved, with state C making forgiveness visible."],
                ["One action per day", "Showing everything (rules, prizes, receipts) on every visit adds friction for someone who just wants to play.", "Today's card opens expanded with one CTA; the rest of the calendar stays as context."],
              ].map(([t, to, r]) => (
                <FadeUp key={t}>
                  <div className="h-full rounded-[16px] bg-white p-8">
                    <p className="text-[11px] font-normal uppercase tracking-[0.1em]" style={{ color: TEAL }}>Decision</p>
                    <p className="mt-2 text-[20px] font-normal text-[#1f1f1f]">{t}</p>
                    <p className="mt-3 text-[14px] font-light leading-relaxed text-[#5a5a5a]">Trade-off: {to}</p>
                    <p className="mt-2 text-[14px] font-normal leading-relaxed text-[#1f1f1f]">Result: {r}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── Motion ────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-[12px] font-normal uppercase tracking-[0.1em]" style={{ color: TEAL }}>In motion</p>
              <h2 className="text-[34px] font-light leading-tight text-[#1f1f1f] md:text-[44px]">
                Fill the bottle, reveal the day
              </h2>
              <p className="text-[17px] font-light leading-relaxed text-[#5a5a5a]">
                A recreation of the core interaction with the real screens: the bottle fills before the result, the
                prize lands with confetti, and on another day "not this time" still counts as progress on the calendar.
              </p>
            </div>
            <FadeIn>
              <video
                className="w-full rounded-[16px]"
                src={videoLoop}
                poster={videoPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Animation of the daily challenge interaction: trying your luck, winning a prize and missing a day"
              />
            </FadeIn>
          </div>
        </ContentContainer>
      </section>

      {/* ── 05 Client iteration ───────────────────────────────────────────── */}
      <section id="client" className="bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="05 · Iterating with the client" title="The biggest risk was the frustration of not winning" />
            <Lead>
              Over 21 days, most visits end without a prize. Feedback rounds focused on making that moment less punishing
              and the winning moment more memorable.
            </Lead>
            <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14">
              <div className="flex flex-col">
                {[
                  ["“Animation between the button and the modal: LISTERINE® filling up.”", "A transition where the bottle fills before revealing the result, building suspense instead of a hard cut.", false],
                  ["“Check whether we can show the prize in the modal.”", "A win modal with the prize itself and the “illustrative image” label required by the brand.", false],
                  ["Risk of frustration when people don't win.", "A “Not this time, come back tomorrow” modal plus a habit message, so a day without a prize still counts as progress.", false],
                  ["With 3 receipts registered, hide the register button.", "An account state that removes the action once the per-person limit is reached.", false],
                  ["A discount coupon after X days without a prize.", "Explored with the client and tech; no evidence it shipped, so it stays an exploration.", true],
                ].map(([ask, answer, muted]) => (
                  <FadeUp key={ask as string}>
                    <div className="border-b border-[#e0e0e0] py-5">
                      <p className="text-[15px] font-normal text-[#1f1f1f]">{ask}</p>
                      <p className={`mt-1 text-[14px] font-light leading-relaxed ${muted ? "text-[#8c8c8c]" : ""}`} style={muted ? undefined : { color: TEAL }}>
                        → {answer}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <CaseImage src={imgBottleFull} alt="Bottle filling animation frame" caption="Bottle filling" />
                <CaseImage src={imgModalWin} alt="Win modal" caption="Win modal" />
                <CaseImage src={imgModalLose} alt="Not this time modal" caption="“Not this time”" />
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 06 Journey ────────────────────────────────────────────────────── */}
      <section id="journey">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="06 · Participation journey" title="From receipt to first cup, in four steps" />
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["1", "Personal data", "Sign-up and password in the shared account engine; email verification."],
                ["2", "Receipt", "Purchase date, receipt number and the store's tax ID."],
                ["3", "Products + photo", "Eligible items (except 250 ml) and a JPG/PNG photo of the receipt."],
                ["4", "21-day challenge", "The first chance is available on the day of registration."],
              ].map(([n, t, d], i) => (
                <FadeUp key={n} delay={i * 0.06}>
                  <div className={`h-full rounded-[16px] p-6 ${i === 3 ? "text-white" : "bg-[#f5f5f5]"}`} style={i === 3 ? { backgroundColor: TEAL } : undefined}>
                    <p className={`text-[28px] font-light ${i === 3 ? "text-[#c3f7ff]" : ""}`} style={i === 3 ? undefined : { color: TEAL }}>{n}</p>
                    <p className={`mt-2 text-[17px] font-normal ${i === 3 ? "text-white" : "text-[#1f1f1f]"}`}>{t}</p>
                    <p className={`mt-2 text-[14px] font-light leading-relaxed ${i === 3 ? "text-[#d9edee]" : "text-[#5a5a5a]"}`}>{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-[1.25fr_0.6fr_1fr] md:items-start">
              <CaseImage src={imgRegisterDesk} alt="Register purchase page, desktop" caption="Register purchase (desktop): a 3-step stepper with the receipt photo mid-flow" />
              <div className="h-[520px] overflow-hidden rounded-[16px]">
                <img src={imgConfirmMobile} alt="Confirmation with day 1 of the calendar, mobile" loading="lazy" className="w-full" />
                <p className="sr-only">Confirmation (mobile)</p>
              </div>
              <CaseImage src={imgLoggedDesk} alt="Logged-in calendar, desktop" caption="Logged-in area (desktop): the receipt's calendar, with today highlighted. Middle: confirmation on mobile, ready for day 1." />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 07 System ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[96px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
            <SectionHeading eyebrow="07 · System" title="Invent the loop, reuse the account" />
            <FadeUp className="flex flex-col gap-5 text-[17px] font-light leading-relaxed text-[#5a5a5a]">
              <p>
                Sign-up, login and email verification followed the account anatomy Johnson &amp; Johnson already used in
                other promotions. That focused design time on what was new: the 21-day calendar, its states and the
                explanation of the mechanic.
              </p>
              <Link to="/projects/jj-engine" className="inline-flex items-center gap-2 text-[15px] font-normal underline-offset-4 hover:underline" style={{ color: TEAL }}>
                See the account engine case →
              </Link>
            </FadeUp>
          </div>
        </ContentContainer>
      </section>

      {/* ── 08 Style guide ────────────────────────────────────────────────── */}
      <section id="style-guide" style={{ backgroundColor: "#003138" }}>
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="08 · Style guide" title="A style guide that made delivery predictable" light />
            <Lead light>
              Before multiplying screens, I organized the campaign's visual foundation: typography, functional colors,
              spacing, grid and components with every state. That's what allowed desktop and mobile, the four calendar
              states and the modals to stay consistent, and gave developers something to assemble, not interpret.
            </Lead>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatCard light value="2 families" label="Knockout for headings, Gotham for text, with desktop and mobile scales" />
              <StatCard light value="12 colors" label="Brand, neutral and feedback (success and error)" />
              <StatCard light value="4 × 4" label="Four button types, each with default, hover, active and disabled" />
              <StatCard light value="Forms" label="Inputs with error and password states, receipt upload, cards, accordion" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <CaseImage light src={imgSgTypography} alt="Typography hierarchy" caption="Typography: H1–H3 hierarchy for desktop and mobile" />
              <div className="flex flex-col gap-5">
                <CaseImage light src={imgSgColors} alt="Color palette" caption="Colors: brand, neutral and feedback" />
                <FadeIn>
                  <div className="rounded-[16px] bg-white p-6">
                    <p className="text-[13px] font-normal" style={{ color: TEAL }}>Prize library</p>
                    <img src={imgPrizeIcons} alt="Prize illustrations" loading="lazy" className="mt-4 w-full" />
                    <p className="mt-4 text-[13px] font-light text-[#5a5a5a]">Assets reused in the win modals, the calendar and the prizes page.</p>
                  </div>
                </FadeIn>
              </div>
              <CaseImage light src={imgSgButtons} alt="Buttons, links and forms" caption="Buttons, links and forms with every state" />
              <CaseImage light src={imgSgComponents} alt="Components" caption="Components: accordion (FAQ), cards and receipt upload" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 09 Impact ─────────────────────────────────────────────────────── */}
      <section id="impact" style={{ backgroundColor: TEAL }}>
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="09 · Impact" title="The most accessed promotion of the week, 18 days after launch" light />
            <FadeUp>
              <blockquote className="rounded-[16px] bg-white/[0.08] p-8 md:p-10">
                <p className="text-[20px] font-light leading-relaxed text-white md:text-[24px]">
                  “The most accessed promotion last week in our referral ranking was the LISTERINE® 2022 21 Day Challenge.”
                </p>
                <footer className="mt-4 text-[13px] font-normal text-[#d9edee]">Portal da Promo, #DataDriven ranking, LinkedIn, Oct 25, 2022 (translated)</footer>
              </blockquote>
            </FadeUp>
            <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#d9edee]">Scale of the activation</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatCard light value="500" label="instant prizes" />
              <StatCard light value="R$ 161,980" label="in prizes (campaign FAQ)" />
              <StatCard light value="22" label="retail chains, physical and online" />
              <StatCard light value="13" label="participating products" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 10 Community ──────────────────────────────────────────────────── */}
      <section id="community">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="10 · In participants' words" title="Nobody asked, but the community documented the challenge" />
            <Lead>
              In October 2022, promo-hunter channels published spontaneous how-to videos. In the comments, people shared
              which day they were on, what they won and what went wrong. It's not a retention rate, but it's exactly the
              behavior the product was designed to create.
            </Lead>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatCard value="4" label="spontaneous tutorials from 4 different channels" />
              <StatCard value="3,374" label="combined views (counted Oct 2026)" />
              <StatCard value="78" label="comments and replies collected" />
              <StatCard value="26" label="mention details unique to the 2022 edition" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {["1cPI_0LIyvI", "Fxf89rxXTQg"].map((id) => (
                <FadeIn key={id}>
                  <div className="relative aspect-video overflow-hidden rounded-[16px]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
                      title="LISTERINE® 21 Day Challenge tutorial on YouTube"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-normal uppercase tracking-[0.1em]" style={{ color: TEAL }}>Forgiveness worked</p>
                <p className="text-[15px] font-light text-[#5a5a5a]">Forgetting days didn't take anyone out, and finishing a cycle became a reason to buy again.</p>
                <Comment handle="@ed•••" text="I won 400 reais and still lost 6 days I forgot to try my luck. I'm on my second receipt and already forgot a day lol" meta="1 reply" />
                <Comment handle="@na•••" text="I finished the 21 days and nothing ☹️ Going for a second LISTERINE®, maybe a prize comes this time 😁🤞" meta="1 reply" />
                <Comment handle="@pr•••" text="What a pity, not this time :( Buy another LISTERINE® and get 21 more chances!*" meta="The site's losing message, quoted word for word" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-normal uppercase tracking-[0.1em]" style={{ color: TEAL }}>People counted the days</p>
                <p className="text-[15px] font-light text-[#5a5a5a]">The calendar became the participants' own language: the day they're on, the day they won.</p>
                <Comment handle="@ad•••" text="I'm already on day 19 and no prize yet" meta="6 likes · 7 replies" />
                <Comment handle="@ro•••" text="On day 9 I got this mini instant camera. Just waiting for delivery 🙏" />
                <Comment handle="@fe•••" text="I won the headset on day 21" meta="3 replies" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#99331a]">What didn't work</p>
                <p className="text-[15px] font-light text-[#5a5a5a]">Buying at a non-participating store was only blocked after the prize: the worst possible moment.</p>
                <Comment handle="@al•••" text="I bought at a pharmacy that wasn't participating and won 200, but it wasn't approved 😢" meta="2 likes" />
                <div className="rounded-[14px] bg-[#fff5f0] p-4">
                  <p className="text-[12px] font-normal text-[#99331a]">Lesson</p>
                  <p className="mt-1 text-[14px] font-normal leading-relaxed text-[#1f1f1f]">
                    Validating the store when the receipt is registered, before unlocking chances, would avoid winning and
                    then losing the prize.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[12px] font-light text-[#8c8c8c]">Comments translated from Portuguese, from the 2022 videos. Usernames shortened for privacy.</p>
          </div>
        </ContentContainer>
      </section>

      {/* ── 11 Reflection ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="11 · Reflection" title="What I'd take to the next one" />
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Measure the habit, not just sign-ups", "Participation data stayed with operations. Next time I'd agree on return metrics from day one: how many come back on day 2, day 7, and how many reach 21."],
                ["Remind without spamming", "Comments like “I lost 6 days I forgot” show the cost of not remembering. An opt-in reminder, an open question in the brief, would be the cheapest retention lever."],
                ["Tell people about forgiveness up front", "“A missed day doesn't eliminate you” was only clear in the FAQ and state C. It deserved a spot on the home page, because it lowers the fear of starting."],
                ["Validate the store before the spin", "Blocking receipts from non-participating stores only after the prize created the worst experience of the challenge. The check belongs in registration."],
              ].map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.06}>
                  <div className="h-full rounded-[16px] bg-white p-7">
                    <p className="text-[18px] font-normal leading-snug text-[#1f1f1f]">{t}</p>
                    <p className="mt-3 text-[14px] font-light leading-relaxed text-[#5a5a5a]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[120px]">
        <FadeUp>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-[36px] font-light text-[#1f1f1f] md:text-[56px]">Thanks for reading!</h2>
            <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#5a5a5a]">
              This challenge ran on top of a shared account engine. The next case shows how that engine was built.
            </p>
            <Link to="/projects/jj-engine">
              <button className="cursor-pointer rounded-full bg-[#1f1f1f] px-6 py-3 text-[16px] font-normal text-white transition-opacity hover:opacity-80">
                Next project
              </button>
            </Link>
          </div>
        </FadeUp>
      </ContentContainer>
    </main>
  );
}
