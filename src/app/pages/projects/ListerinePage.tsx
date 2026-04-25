import { motion } from "framer-motion";
import { PasswordGate } from "../../components/design-system/PasswordGate";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import type { ReactNode } from "react";

import listerineCover from "../../../imports/Frame1-1/4856bf47df4169cdcafa182864346bc9a5a04584.png";
import imgHero from "../../../imports/listerine/Xxs6AIQpRBYZvW9F.webp";
import imgKickoff from "../../../imports/listerine/R5eKPM8XnIZuE6PJ.png";
import imgClientSuggestion from "../../../imports/listerine/uCm0KlGG1rXcekqS.png";
import imgSprintPlanner from "../../../imports/listerine/qfIlfDmiX57mXzdO.png";
import imgBenchmarking from "../../../imports/listerine/WT5zLwddI4N1gPrz.png";
import imgStages from "../../../imports/listerine/WDDpnMC6ZeDC7rEl.png";
import imgDailyMessages from "../../../imports/listerine/F8qflp0AwJ2DmkKX.png";
import imgClearlyProcess from "../../../imports/listerine/7qXT1xAKz4d1PH7B.png";
import imgSmallBottles from "../../../imports/listerine/nOXuz5Yy7J4yj0mN.png";
import imgCheckValidated from "../../../imports/listerine/3dwAXgpC9leutsMW.png";
import imgMotivational from "../../../imports/listerine/5Xti9mM4Scodb2ev.png";
import imgWireflow1 from "../../../imports/listerine/YbFhILRTtBMsbnrQ.png";
import imgWireflow2 from "../../../imports/listerine/60mf5ZIczo3paPE6.png";
import imgWireflow3 from "../../../imports/listerine/9vQUBaHr8XPDS8XV.png";
import imgMechanicsDiscussion from "../../../imports/listerine/j1l62ei0p3smcpMx.png";
import imgMechanicStudies from "../../../imports/listerine/zItdusei86Yy6dPY.png";
import imgMechanicApproved from "../../../imports/listerine/oygyn9p6HENZwUSq.png";
import imgLayoutComponents from "../../../imports/listerine/Ad3kg2xr0ZQXXkV5.png";
import imgStyleGuide from "../../../imports/listerine/h3STpvlFbBlfIGPj.png";
import imgMobileScreens from "../../../imports/listerine/HcO2KzAFkLWxx7FM.png";
import imgPMApproval from "../../../imports/listerine/P1j30KhOLSE9mvXe.png";
import imgYoutube from "../../../imports/listerine/gT9ksXz0eCFOVo8j.png";
import imgVideos from "../../../imports/listerine/MijsLABlsl7W7viy.png";
import imgConclusion from "../../../imports/listerine/qdwpU7FykqMjTOEN.png";

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

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="px-5 md:px-8">
      <div className="mx-auto max-w-[1188px] border-t border-[#e3e3e3]" />
    </div>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

const overview = [
  { title: "My Role", items: ["UX/UI Design"] },
  { title: "Tools", items: ["Figma", "FigJam"] },
  { title: "Team", items: ["1 UX/UI Designer", "1 UX Research", "4 Developers", "1 Project Manager"] },
  { title: "Timeline", items: ["Overall: 6+ weeks", "Discovery & Research: 2+ weeks", "Design & Delivery: 4 weeks"] },
];

const processSteps = ["Benchmarking", "Wireflows", "Mechanics", "Layout", "Delivery", "Results"];

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#b3b3b3]">{eyebrow}</p>
        )}
        <h2 className="text-[36px] font-light leading-tight text-[#1f1f1f] md:text-[56px]">{title}</h2>
      </div>
    </FadeUp>
  );
}

function TextBlock({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-4">
        {label && <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">{label}</p>}
        <div className="flex flex-col gap-4 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

function DarkCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <FadeUp>
      <div className="rounded-[16px] bg-[#1f1f1f] p-8 md:p-10">
        <p className="text-[20px] font-normal text-white md:text-[24px]">{title}</p>
        <div className="mt-5 flex flex-col gap-4 text-[16px] font-light leading-relaxed text-white/70">
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

function LightCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <FadeUp>
      <div className="rounded-[16px] bg-[#f5f5f5] p-8 md:p-10">
        <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">{title}</p>
        <div className="mt-5 flex flex-col gap-4 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

function CaseImage({ src, alt = "", caption, aspect }: { src: string; alt?: string; caption?: string; aspect?: string }) {
  return (
    <FadeIn>
      <figure className="w-full">
        <div className={`overflow-hidden rounded-[16px] ${aspect ? aspect : ""}`}>
          <img src={src} alt={alt} className={`w-full ${aspect ? "h-full object-cover" : ""}`} />
        </div>
        {caption && <figcaption className="mt-3 text-[13px] font-light text-[#b3b3b3]">{caption}</figcaption>}
      </figure>
    </FadeIn>
  );
}

export function ListerinePage() {
  return (
    <PasswordGate>
      <main className="bg-white font-light text-[#1f1f1f]">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative flex h-[500px] flex-col justify-end overflow-hidden">
          <img src={listerineCover} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <ContentContainer className="relative pb-12 md:pb-16">
            <motion.p
              className="text-[13px] font-normal uppercase tracking-[0.1em] text-white/60"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: ease, delay: 0.1 }}
            >
              Johnson &amp; Johnson
            </motion.p>
            <motion.h1
              className="mt-4 text-[40px] font-light leading-tight text-white md:text-[64px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease }}
            >
              21 Day Campaign with LISTERINE®
            </motion.h1>
            <motion.p
              className="mt-4 text-[18px] font-light text-white/80 md:text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease, delay: 0.15 }}
            >
              How we transformed daily LISTERINE® routines into a 21-day engagement journey.
            </motion.p>
          </ContentContainer>
        </section>

        {/* ── Campaign visual ───────────────────────────────────────────────── */}
        <section className="w-full overflow-hidden">
          <img src={imgHero} alt="LISTERINE® 21 Day Campaign visual" className="w-full object-cover" />
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <FadeUp>
              <h2 className="text-[28px] font-light leading-snug text-[#1f1f1f] md:text-[36px]">
                21 Day Challenge — LISTERINE® Campaign Lead Strategy
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
              <p>
                Our project aimed to motivate participants to acquire any LISTERINE® product and use it consistently
                for 21 consecutive days. The primary goals were to increase engagement, capture leads, and foster a
                sense of commitment among participants.
              </p>
              <p>
                Throughout the 21-day campaign, participants would receive daily instant rewards, facilitated by a
                well-designed mechanics system.
              </p>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── Overview ──────────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-[72px]">
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

        <Divider />

        {/* ── Kickoff ───────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
            <CaseImage src={imgKickoff} alt="Campaign kickoff session" />
            <TextBlock label="Kickoff">
              <p>
                We initiated an initial session with the client to discuss and refine the flow and concept of the
                LISTERINE CHALLENGE 21-DAY campaign.
              </p>
              <p>
                We discussed key aspects such as defining the promotion mechanics and draws, as well as creating a
                user-friendly registration and participation process. We also had the campaign's Key Visual already
                in place.
              </p>
            </TextBlock>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Challenge & Goals ─────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-6 md:grid-cols-2">
            <LightCard title="Challenge">
              <p>
                How can we effectively communicate the benefits and{" "}
                <strong className="font-normal text-[#1f1f1f]">everyday usage of our product</strong> to the consumer
                in a creative manner that avoids any perception of being excessive or redundant?
              </p>
            </LightCard>
            <LightCard title="Goals">
              <p>
                Our goal is to motivate participants to purchase any LISTERINE® product and use it{" "}
                <strong className="font-normal text-[#1f1f1f]">consistently for 21 consecutive days.</strong> The
                primary objective is to increase engagement and capture leads.
              </p>
            </LightCard>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Client suggestion + Sprint ────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="Client suggestion">
                <p>
                  As part of the collaboration process with the client, we received an initial idea of the campaign
                  landing page structure through a low-fidelity wireframe.
                </p>
              </TextBlock>
              <CaseImage src={imgClientSuggestion} alt="Client wireframe suggestion" caption="Suggestion sent by client" />
            </div>
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <CaseImage src={imgSprintPlanner} alt="Sprint planner schedule" caption="Planner of schedule" />
              <TextBlock label="Initiating the Sprint">
                <p>
                  Considering this suggestion, we decided to start the sprint by creating a medium-fidelity wireflow,
                  as we already had components from previous campaigns and the deadline for the final material was tight.
                </p>
                <p>
                  <strong className="font-normal text-[#1f1f1f]">Design Sprint | 14 Days</strong>
                </p>
              </TextBlock>
            </div>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Process ───────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-14">
            <SectionHeading title="My Design Process" />
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-3 gap-6 md:grid-cols-6">
                {processSteps.map((step, i) => (
                  <div key={step} className="flex flex-col gap-3 border-t-2 border-[#1f1f1f] pt-4">
                    <span className="text-[11px] font-normal uppercase tracking-[0.1em] text-[#b3b3b3]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-normal text-[#1f1f1f]">{step}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── 01 Benchmarking ───────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <SectionHeading eyebrow="01" title="Benchmarking" />
              <CaseImage src={imgBenchmarking} alt="Benchmarking process" caption="Benchmarking process" />
              <TextBlock label="Research approach">
                <p>
                  We kickstart the process by gathering insights and best practices from other campaigns and websites
                  that have implemented similar mechanics. This way, we can distill the most effective approaches and
                  use them as references while crafting our campaign.
                </p>
              </TextBlock>
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
                <CaseImage src={imgStages} alt="Stages the day mechanics" aspect="aspect-[4/3]" />
                <TextBlock label="Stages the day">
                  <p>
                    We conducted research on Listerine's 21-day campaigns to find a mechanics that best suits the idea
                    proposed by the client. This campaign proposes a schedule-based approach,{" "}
                    <strong className="font-normal text-[#1f1f1f]">
                      with stages indicating the day the participant is at in their journey.
                    </strong>
                  </p>
                </TextBlock>
              </div>
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
                <TextBlock label="Daily messages">
                  <p>
                    In this campaign, there is a proposal for an interactive calendar, where participants would{" "}
                    <strong className="font-normal text-[#1f1f1f]">
                      receive daily messages to increase engagement
                    </strong>{" "}
                    with the product and encourage the adoption of new habits.
                  </p>
                </TextBlock>
                <CaseImage src={imgDailyMessages} alt="Daily messages concept" aspect="aspect-[4/3]" />
              </div>
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
                <CaseImage src={imgClearlyProcess} alt="Clear process communication" aspect="aspect-[4/3]" />
                <TextBlock label="Clearly process">
                  <p>
                    For the structuring of the landing page, we plan to include a section at the beginning that
                    reinforces and explains the mechanics of the promotion. This will ensure that users{" "}
                    <strong className="font-normal text-[#1f1f1f]">clearly understand how the entire process works</strong>,
                    avoiding any possible confusion from the start.
                  </p>
                </TextBlock>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <CaseImage src={imgSmallBottles} alt="Small bottles concept" caption="Small bottles reference" aspect="aspect-[4/3]" />
                <CaseImage src={imgCheckValidated} alt="Check and validated mechanic" caption="Check and validated" aspect="aspect-[4/3]" />
                <CaseImage src={imgMotivational} alt="Motivational messages" caption="Motivational messages" aspect="aspect-[4/3]" />
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <TextBlock label="Small bottles">
                  <p>
                    We could include vector graphics of small bottles{" "}
                    <strong className="font-normal text-[#1f1f1f]">to represent the product usage</strong>, or the use
                    of a cup to encourage daily repetition and completion of the 21-day challenge.
                  </p>
                </TextBlock>
                <TextBlock label="Check and validated">
                  <p>
                    Thinking in a mobile-first format, we could use card-shaped components indicating the days of the
                    participant's journey, and a{" "}
                    <strong className="font-normal text-[#1f1f1f]">checkmark to mark the person's progress</strong>{" "}
                    throughout the challenge.
                  </p>
                </TextBlock>
                <TextBlock label="Motivational messages">
                  <p>
                    Client suggests{" "}
                    <strong className="font-normal text-[#1f1f1f]">integrating motivational messages</strong> in
                    promotion mechanics. Daily progress marked with checkmarks; product messages enhance engagement.
                  </p>
                </TextBlock>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* ── 02 Wireflows ──────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="02" title="Wireflows" />
            <TextBlock label="Approach">
              <p>
                As a UX Designer professional, given the tight deadline to complete the design sprint phase, we opted
                to leverage existing wireframe structures from previous campaigns. This approach allowed us to optimize
                time and incorporate proven best practices for the landing page and user registration flow.
              </p>
            </TextBlock>
            <div className="grid gap-4 md:grid-cols-3">
              <CaseImage src={imgWireflow1} alt="Wireflow — registration flow" aspect="aspect-[3/4]" />
              <CaseImage src={imgWireflow2} alt="Wireflow — landing page flow" aspect="aspect-[3/4]" />
              <CaseImage src={imgWireflow3} alt="Wireflow — participation flow" aspect="aspect-[3/4]" />
            </div>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── 03 Campaign mechanics ─────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="03" title="Campaign mechanics" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <CaseImage src={imgMechanicsDiscussion} alt="Discussing mechanics with client" caption="Discussing the promotion mechanics with the client" aspect="aspect-[4/3]" />
              <TextBlock label="Promotion rules">
                <p>
                  After a second round of discussion with the client, we proposed an initial idea for the promotion
                  mechanics. Together, we evaluated how the promotion could be effectively developed.
                </p>
                <p><strong className="font-normal text-[#1f1f1f]">1.</strong> You registered 1 receipt → spin the wheel <strong className="font-normal text-[#1f1f1f]">1 time per day.</strong></p>
                <p><strong className="font-normal text-[#1f1f1f]">2.</strong> You registered 2 receipts → spin the wheel <strong className="font-normal text-[#1f1f1f]">2 times per day.</strong></p>
                <p><strong className="font-normal text-[#1f1f1f]">3.</strong> You registered 3 receipts → spin the wheel <strong className="font-normal text-[#1f1f1f]">3 times per day.</strong></p>
              </TextBlock>
            </div>
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="Mechanic approved">
                <p>
                  The mechanics were approved, with the{" "}
                  <strong className="font-normal text-[#1f1f1f]">indication of the days</strong> through{" "}
                  <strong className="font-normal text-[#1f1f1f]">filled and empty cups</strong>. Those who are awarded
                  will have their cup <strong className="font-normal text-[#1f1f1f]">marked with a star</strong>.
                </p>
                <p>
                  Upon selecting the feature, a{" "}
                  <strong className="font-normal text-[#1f1f1f]">motivational message</strong> will be displayed along
                  with a button for the person to participate in the promotion on the selected day.
                </p>
              </TextBlock>
              <div className="flex flex-col gap-4">
                <CaseImage src={imgMechanicStudies} alt="Mechanic studies" caption="Mechanic studies" aspect="aspect-[4/3]" />
                <CaseImage src={imgMechanicApproved} alt="Mechanic approved" caption="Mechanic approved by both the client and the tech team" aspect="aspect-[4/3]" />
              </div>
            </div>
          </div>
        </ContentContainer>

        {/* ── 04 Layout ─────────────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <SectionHeading eyebrow="04" title="Layout & Components" />
              <TextBlock label="Building in Figma">
                <p>
                  The layout components were all constructed using the Figma tool. I took the opportunity to develop
                  each component in a prototypable manner, ensuring a consistent and interactive layout by the end of
                  the project.
                </p>
              </TextBlock>
              <CaseImage src={imgLayoutComponents} alt="Layout components" />
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
                <CaseImage src={imgStyleGuide} alt="Style guide" aspect="aspect-[4/3]" />
                <TextBlock label="Style guide">
                  <p>
                    In my projects, I always strive to create a cohesive and technology-aligned style guide. This not
                    only optimizes the development time for each component but also ensures timely project delivery.
                  </p>
                </TextBlock>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* ── 05 Delivery ───────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="05" title="Delivery" />
            <TextBlock label="Mobile prototype">
              <p>
                The project encompassed the creation and development of around 13 mobile-first pages, meticulously
                designed to support a campaign centered on user registration and participation in the 21-day
                Listerine challenge. The prototype was thoughtfully crafted with a strong focus on mobile usability,
                ensuring seamless navigation and a delightful experience across all pages.
              </p>
            </TextBlock>
            <CaseImage src={imgMobileScreens} alt="Mobile screens delivery" />
            <TextBlock label="Desk prototype">
              <p>
                Throughout the page creation process, regular alignment and validation meetings were conducted,
                involving both the technology team and the client. These collaborative sessions ensured thorough
                scrutiny and approval of all campaign functionalities, fostering a seamless integration of ideas and
                insights.
              </p>
            </TextBlock>
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <CaseImage src={imgPMApproval} alt="PM approval comments" caption="Comments — Project Manager" aspect="aspect-[4/3]" />
              <DarkCard title="Approved with modifications">
                <p>
                  Great, you nailed it! We convinced them and we're moving forward.{" "}
                  <strong className="font-normal text-white">The layout has been approved and received personal praise.</strong>
                </p>
                <p className="italic">
                  "Alexandre, to officially wrap things up, could you just adjust the text? (They sent it without
                  commas and accents)."
                </p>
              </DarkCard>
            </div>
          </div>
        </ContentContainer>

        {/* ── 06 Results ────────────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <SectionHeading eyebrow="06" title="Results" />
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
                <CaseImage src={imgYoutube} alt="YouTube community comments" caption="Comments on one of the videos explaining the campaign" aspect="aspect-[4/3]" />
                <TextBlock label="Youtube Community">
                  <p>
                    The project achieved success by{" "}
                    <strong className="font-normal text-[#1f1f1f]">
                      generating advocacy, positive user engagement, and a strong sense of community.
                    </strong>{" "}
                    Participants became enthusiastic advocates for the brand, sharing their experiences on social media
                    and creating informative content to help others win the prize.
                  </p>
                </TextBlock>
              </div>
              <CaseImage src={imgVideos} alt="Campaign videos shared by participants" caption="Many other videos shared and created by people about the campaign" />
              <TextBlock label="Strengthening Bonds with Organic Reach">
                <p>
                  This resulted in significant organic reach, increased registrations, and website traffic, while
                  strengthening the bond between the brand and its followers. The project created an engaging atmosphere
                  and built a base of loyal and enthusiastic fans.
                </p>
              </TextBlock>
            </div>
          </ContentContainer>
        </section>

        {/* ── Conclusion ────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <CaseImage src={imgConclusion} alt="Campaign conclusion visual" />
            <TextBlock label="Conclusion">
              <p>
                This campaign was a highly challenging endeavor, with just around 1.5 months to create all pages,
                devise the mechanics for the 21-day Listerine promotion, and execute the technological development.
              </p>
              <p>
                Despite these tight constraints, drawing insights from previous projects and conducting occasional
                alignments with the technology teams allowed us to deliver the campaign successfully, achieving
                outstanding results in the end.
              </p>
            </TextBlock>
          </div>
        </ContentContainer>

        {/* ── Closing ───────────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 pt-8 md:pb-[120px] md:pt-16">
          <FadeUp>
            <div className="flex flex-col items-center gap-8 text-center">
              <h2 className="text-[36px] font-light text-[#1f1f1f] md:text-[56px]">Thanks for reading!</h2>
              <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                Want to work together? Feel free to reach out or say hello on my social media.
              </p>
            </div>
          </FadeUp>
        </ContentContainer>

      </main>
    </PasswordGate>
  );
}
