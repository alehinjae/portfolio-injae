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

const overview = [
  { title: "My Role", items: ["UX/UI Design"] },
  { title: "Tools", items: ["Figma", "FigJam"] },
  {
    title: "Team",
    items: ["1 UX/UI Designer", "1 UX Research", "4 Developers", "1 Project Manager"],
  },
  {
    title: "Timeline",
    items: ["Overall: 6+ weeks", "Discovery & Research: 2+ weeks", "Design & Delivery: 4 weeks"],
  },
];

const processSteps = ["1. Bench", "2. Wireflows", "3. Mechanics", "4. Layout", "5. Delivery", "6. Results"];

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <p className="text-[13px] font-light uppercase tracking-[0.28em] text-[#8b8b8b]">{eyebrow}</p>
      )}
      <h2 className="max-w-[860px] text-[42px] font-light leading-[1.05] text-[#1f1f1f] md:text-[64px]">
        {title}
      </h2>
    </div>
  );
}

function TextCard({
  title,
  children,
  tone = "light",
}: {
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <article
      className={`rounded-[24px] border p-7 md:p-9 ${
        isDark ? "border-[#1f1f1f] bg-[#1f1f1f] text-white" : "border-[#e3e3e3] bg-white/55 text-[#1f1f1f]"
      }`}
    >
      <h3 className="text-[24px] font-light leading-[1.2]">{title}</h3>
      <div
        className={`mt-5 flex flex-col gap-4 text-[16px] font-light leading-[28px] md:text-[18px] md:leading-[31px] ${
          isDark ? "text-white/78" : "text-[#1f1f1f]"
        }`}
      >
        {children}
      </div>
    </article>
  );
}

function OverviewCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[24px] border border-[#e3e3e3] bg-white/50 p-6">
      <h3 className="text-[22px] font-light leading-[1.2] text-[#1f1f1f]">{title}</h3>
      <ul className="mt-5 flex flex-col gap-2 text-[17px] font-light leading-[28px] text-[#1f1f1f]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProcessTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-6">
      {processSteps.map((step, index) => (
        <div key={step} className="flex flex-col gap-4 rounded-[24px] border border-[#e3e3e3] bg-white/50 p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e3e3e3] text-[20px] font-light text-[#1f1f1f]">
            {index + 1}
          </div>
          <p className="text-[15px] font-light leading-[22px] text-[#1f1f1f]">{step}</p>
        </div>
      ))}
    </div>
  );
}

function CaseImage({ src, alt = "", caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <figure className="w-full">
      <img src={src} alt={alt} className="w-full rounded-[16px] object-cover" />
      {caption && <figcaption className="mt-3 text-[13px] font-light text-[#8b8b8b]">{caption}</figcaption>}
    </figure>
  );
}

export function ListerinePage() {
  return (
    <PasswordGate>
      <main className="bg-[#f8f8f8] font-light text-[#1f1f1f]">

        {/* Hero */}
        <section className="relative min-h-[540px] overflow-hidden">
          <img src={listerineCover} alt="" className="absolute inset-0 h-full w-full scale-[1.03] object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <ContentContainer className="relative flex min-h-[540px] items-end pb-16 pt-24 md:pb-20">
            <div className="max-w-[860px] text-white">
              <p className="text-[14px] font-light uppercase tracking-[0.28em] text-white/70">Johnson & Johnson</p>
              <h1 className="mt-6 text-[54px] font-light leading-[1.02] md:text-[92px]">
                21 Day Campaign with LISTERINE®
              </h1>
              <p className="mt-8 max-w-[760px] text-[20px] font-light leading-[32px] text-white/86 md:text-[24px] md:leading-[38px]">
                How we transformed daily LISTERINE® routines into a 21-day engagement journey.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Campaign visual */}
        <section className="w-full overflow-hidden">
          <img src={imgHero} alt="LISTERINE® 21 Day Campaign visual" className="w-full object-cover" />
        </section>

        {/* Intro */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className="text-[30px] font-light leading-[1.25] text-[#1f1f1f] md:text-[38px]">
                21 Day Challenge — LISTERINE® Campaign Lead Strategy
              </h2>
            </div>
            <div className="flex flex-col gap-7 text-[18px] font-light leading-[31px] text-[#1f1f1f] md:text-[20px] md:leading-[34px]">
              <p>
                Our project aimed to motivate participants to acquire any LISTERINE® product and use it consistently
                for 21 consecutive days. The primary goals were to increase engagement, capture leads, and foster a
                sense of commitment among participants.
              </p>
              <p>
                Throughout the 21-day campaign, participants would receive daily instant rewards, facilitated by a
                well-designed mechanics system.
              </p>
            </div>
          </div>
        </ContentContainer>

        {/* Overview */}
        <ContentContainer className="pb-16 md:pb-24">
          <div className="grid gap-4 md:grid-cols-4">
            {overview.map((item) => (
              <OverviewCard key={item.title} title={item.title} items={item.items} />
            ))}
          </div>
        </ContentContainer>

        {/* Kickoff */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgKickoff} alt="Campaign kickoff session" />
              <TextCard title="Kickoff">
                <p>
                  We initiated an initial session with the client to discuss and refine the flow and concept of the
                  LISTERINE CHALLENGE 21-DAY campaign.
                </p>
                <p>
                  We discussed key aspects such as defining the promotion mechanics and draws, as well as creating a
                  user-friendly registration and participation process. We also had the campaign's Key Visual already
                  in place.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* Challenge & Goals */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <TextCard title="Challenge">
              <p>
                How can we effectively communicate the benefits and{" "}
                <strong>everyday usage of our product</strong> to the consumer in a creative manner that avoids any
                perception of being excessive or redundant?
              </p>
            </TextCard>
            <TextCard title="Goals">
              <p>
                Our goal is to motivate participants to purchase any LISTERINE® product and use it{" "}
                <strong>consistently for 21 consecutive days.</strong> The primary objective is to increase engagement
                and capture leads.
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Client suggestion + Sprint */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
              <TextCard title="Client suggestion">
                <p>
                  As part of the collaboration process with the client, we received an initial idea of the campaign
                  landing page structure through a low-fidelity wireframe.
                </p>
              </TextCard>
              <CaseImage src={imgClientSuggestion} alt="Client wireframe suggestion" caption="Suggestion sent by client" />
            </div>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgSprintPlanner} alt="Sprint planner schedule" caption="Planner of schedule" />
              <TextCard title="Initiating the Sprint">
                <p>
                  Considering this suggestion, we decided to start the sprint by creating a medium-fidelity wireflow,
                  as we already had components from previous campaigns and the deadline for the final material was
                  tight.
                </p>
                <p>
                  <strong>Design Sprint | 14 Days</strong>
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* Process */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-14">
            <SectionHeading title="My Design Process" />
            <ProcessTimeline />
          </div>
        </ContentContainer>

        {/* 1. Benchmarking */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="01" title="Benchmarking" />
            <CaseImage src={imgBenchmarking} alt="Benchmarking process" caption="Benchmarking process" />
            <TextCard title="1. Benchmarking">
              <p>
                We kickstart the process by gathering insights and best practices from other campaigns and websites
                that have implemented similar mechanics. This way, we can distill the most effective approaches and
                use them as references while crafting our campaign.
              </p>
            </TextCard>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              <CaseImage src={imgStages} alt="Stages the day mechanics" />
              <TextCard title="Stages the day">
                <p>
                  We conducted research on Listerine's 21-day campaigns to find a mechanics that best suits the idea
                  proposed by the client. This campaign proposes a schedule-based approach,{" "}
                  <strong>with stages indicating the day the participant is at in their journey.</strong>
                </p>
              </TextCard>
            </div>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
              <TextCard title="Daily messages">
                <p>
                  In this campaign, there is a proposal for an interactive calendar, where participants would{" "}
                  <strong>receive daily messages to increase engagement</strong> with the product and encourage the
                  adoption of new habits.
                </p>
              </TextCard>
              <CaseImage src={imgDailyMessages} alt="Daily messages concept" />
            </div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              <CaseImage src={imgClearlyProcess} alt="Clear process communication" />
              <TextCard title="Clearly process">
                <p>
                  For the structuring of the landing page, we plan to include a section at the beginning that
                  reinforces and explains the mechanics of the promotion. This will ensure that users{" "}
                  <strong>clearly understand how the entire process works</strong>, avoiding any possible confusion
                  from the start.
                </p>
              </TextCard>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <CaseImage src={imgSmallBottles} alt="Small bottles concept" caption="Small bottles reference" />
              <CaseImage src={imgCheckValidated} alt="Check and validated mechanic" caption="Check and validated" />
              <CaseImage src={imgMotivational} alt="Motivational messages" caption="Motivational messages" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <TextCard title="Small bottles">
                <p>
                  We could include vector graphics of small bottles{" "}
                  <strong>to represent the product usage</strong>, or the use of a cup to encourage daily repetition
                  and completion of the 21-day challenge.
                </p>
              </TextCard>
              <TextCard title="Check and validated">
                <p>
                  Thinking in a mobile-first format, we could use card-shaped components indicating the days of the
                  participant's journey, and a{" "}
                  <strong>checkmark to mark the person's progress</strong> throughout the challenge.
                </p>
              </TextCard>
              <TextCard title="Motivational messages">
                <p>
                  Client suggests <strong>integrating motivational messages</strong> in promotion mechanics. Daily
                  progress marked with checkmarks; product messages enhance engagement.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 2. Wireflows */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="02" title="Wireflows" />
            <TextCard title="2. Wireflows">
              <p>
                As a UX Designer professional, given the tight deadline to complete the design sprint phase, we opted
                to leverage existing wireframe structures from previous campaigns. This approach allowed us to optimize
                time and incorporate proven best practices for the landing page and user registration flow.
              </p>
            </TextCard>
            <div className="grid gap-4 md:grid-cols-3">
              <CaseImage src={imgWireflow1} alt="Wireflow - registration flow" />
              <CaseImage src={imgWireflow2} alt="Wireflow - landing page flow" />
              <CaseImage src={imgWireflow3} alt="Wireflow - participation flow" />
            </div>
          </div>
        </ContentContainer>

        {/* 3. Campaign mechanics */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="03" title="Campaign mechanics" />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgMechanicsDiscussion} alt="Discussing mechanics with client" caption="Discussing the promotion mechanics with the client" />
              <TextCard title="3. Campaign mechanics">
                <p>
                  After a second round of discussion with the client, we proposed an initial idea for the promotion
                  mechanics. Together, we evaluated how the promotion could be effectively developed.
                </p>
                <p>
                  <strong>1.</strong> You registered 1 receipt, so you are entitled to spin the wheel{" "}
                  <strong>1 time per day.</strong>
                </p>
                <p>
                  <strong>2.</strong> You registered 2 receipts, so you are entitled to spin the wheel{" "}
                  <strong>2 times per day.</strong>
                </p>
                <p>
                  <strong>3.</strong> You registered 3 receipts, so you are entitled to spin the wheel{" "}
                  <strong>3 times per day.</strong>
                </p>
              </TextCard>
            </div>
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
              <TextCard title="Mechanic approved">
                <p>
                  The mechanics were approved, with the{" "}
                  <strong>indication of the days</strong> through{" "}
                  <strong>filled and empty cups</strong>. Those who are awarded will have their cup{" "}
                  <strong>marked with a star</strong>.
                </p>
                <p>
                  Upon selecting the feature, a <strong>motivational message</strong> will be displayed along with a
                  button for the person to participate in the promotion on the selected day.
                </p>
              </TextCard>
              <div className="flex flex-col gap-4">
                <CaseImage src={imgMechanicStudies} alt="Mechanic studies" caption="Mechanic studies" />
                <CaseImage src={imgMechanicApproved} alt="Mechanic approved" caption="Mechanic approved by both the client and the tech team" />
              </div>
            </div>
          </div>
        </ContentContainer>

        {/* 4. Layout */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="04" title="Layout & Components" />
            <TextCard title="4. Layout | Components">
              <p>
                The layout components were all constructed using the Figma tool. I took the opportunity to develop
                each component in a prototypable manner, ensuring a consistent and interactive layout by the end of
                the project.
              </p>
            </TextCard>
            <CaseImage src={imgLayoutComponents} alt="Layout components" />
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              <CaseImage src={imgStyleGuide} alt="Style guide" />
              <TextCard title="Style guide">
                <p>
                  In my projects, I always strive to create a cohesive and technology-aligned style guide. This not
                  only optimizes the development time for each component but also ensures timely project delivery.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 5. Delivery */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="05" title="Delivery" />
            <TextCard title="Mobile prototype">
              <p>
                The project encompassed the creation and development of around 13 mobile-first pages, meticulously
                designed to support a campaign centered on user registration and participation in the 21-day
                Listerine challenge. The prototype was thoughtfully crafted with a strong focus on mobile usability,
                ensuring seamless navigation and a delightful experience across all pages.
              </p>
            </TextCard>
            <CaseImage src={imgMobileScreens} alt="Mobile screens delivery" />
            <TextCard title="Desk prototype">
              <p>
                Throughout the page creation process, regular alignment and validation meetings were conducted,
                involving both the technology team and the client. These collaborative sessions ensured thorough
                scrutiny and approval of all campaign functionalities, fostering a seamless integration of ideas and
                insights.
              </p>
            </TextCard>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
              <CaseImage src={imgPMApproval} alt="PM approval comments" caption="Comments — Project Manager" />
              <TextCard title="Approved with modifications" tone="dark">
                <p>
                  Great, you nailed it! We convinced them and we're moving forward.{" "}
                  <strong className="text-white">The layout has been approved and received personal praise.</strong>
                </p>
                <p className="italic">
                  "Alexandre, to officially wrap things up, could you just adjust the text? (They sent it without
                  commas and accents)."
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 6. Results */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="06" title="Results" />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgYoutube} alt="YouTube community comments" caption="Comments on one of the videos explaining the campaign" />
              <TextCard title="Youtube Community">
                <p>
                  The project achieved success by{" "}
                  <strong>generating advocacy, positive user engagement, and a strong sense of community.</strong>{" "}
                  Participants became enthusiastic advocates for the brand, sharing their experiences on social media
                  and creating informative content to help others win the prize.
                </p>
              </TextCard>
            </div>
            <CaseImage src={imgVideos} alt="Campaign videos shared by participants" caption="Many other videos shared and created by people about the campaign" />
            <TextCard title="Strengthening Bonds with Organic Reach">
              <p>
                This resulted in significant organic reach, increased registrations, and website traffic, while
                strengthening the bond between the brand and its followers. The project created an engaging atmosphere
                and built a base of loyal and enthusiastic fans.
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Conclusion */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <CaseImage src={imgConclusion} alt="Campaign conclusion visual" />
            <TextCard title="Conclusion">
              <p>
                This campaign was a highly challenging endeavor, with just around 1.5 months to create all pages,
                devise the mechanics for the 21-day Listerine promotion, and execute the technological development.
              </p>
              <p>
                Despite these tight constraints, drawing insights from previous projects and conducting occasional
                alignments with the technology teams allowed us to deliver the campaign successfully, achieving
                outstanding results in the end.
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Closing */}
        <ContentContainer className="pb-8 pt-10 md:pb-12">
          <div className="rounded-[24px] border border-[#e3e3e3] bg-white/55 px-6 py-10 text-center">
            <h2 className="text-[26px] font-light leading-[1.2] text-[#1f1f1f]">
              Thank you for reading my case study!
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[18px] font-light leading-[30px] text-[#8b8b8b]">
              Want to work with me? Feel free to contact me or just say hello on my social media.
            </p>
          </div>
        </ContentContainer>

      </main>
    </PasswordGate>
  );
}
