import { PasswordGate } from "../../components/design-system/PasswordGate";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import type { ReactNode } from "react";

import heringVisual from "../../../imports/Frame1-1/17484fa76e68e016ea4f9cb7bf74dd4e285d830f.png";
import gifProduct1 from "../../../imports/hering/oaaNNAkpJq7bqjOO.gif";
import gifProduct2 from "../../../imports/hering/RdDLiYxhVtq8129l.gif";
import gifProduct3 from "../../../imports/hering/StxQdypoNoXRB8gX.gif";
import imgWorkshop from "../../../imports/hering/i6ga78AkHyWJkehV.webp";
import imgObjective from "../../../imports/hering/7sm1SPJUVhGbZSWy.webp";
import imgBenchmarking from "../../../imports/hering/y8IoGmXu3zJT5RAT.webp";
import imgComponents from "../../../imports/hering/IIr6Y0vwGf6vsJLr.webp";
import imgInterviews from "../../../imports/hering/8QHTo8VqvbeXdCXd.webp";
import imgQA from "../../../imports/hering/lWL6etJhCQOVlpBi.webp";
import imgOpportunities from "../../../imports/hering/wRnXuj1Mpvwx9vIN.webp";
import imgDesignSystem from "../../../imports/hering/CPArummYgQljE0qS.webp";
import gifLayout1 from "../../../imports/hering/7EpP6wGaJnolaLHF.gif";
import gifLayout2 from "../../../imports/hering/NlLH5g8oWT5VCFL0.gif";
import gifLayout3 from "../../../imports/hering/oT3FZIyfnknzHdJg.gif";
import gifLayout4 from "../../../imports/hering/HuvyV0VInBHqBfOu.gif";
import imgBefore from "../../../imports/hering/4d7sGPQXBe5vHnon.webp";
import imgAfter from "../../../imports/hering/7Of2PgRjjsX5NiCv.webp";
import imgHandoff from "../../../imports/hering/ABH0W7Z3CZOzbTkH.webp";
import imgABTest from "../../../imports/hering/kD2SbDW5cwg3z3Na.webp";
import imgAnalysis from "../../../imports/hering/BoyHM7BcF4sr3b4R.webp";
import imgResults from "../../../imports/hering/k4pGaHKaKCcj632J.webp";
import imgConversion from "../../../imports/hering/jJ4D1DWjzZ5hXinL.webp";

const metrics = [
  { value: "+0.2%", label: "Average Conversion Increase" },
  { value: "-50%", label: "Development Time" },
  { value: "+9", label: "Improved Components" },
];

const overview = [
  {
    title: "My Role",
    items: ["Product Design", "Workshop facilitator"],
  },
  {
    title: "Tools",
    items: ["FigJam", "Figma", "Google Analytics", "ChatGPT (Plus)", "Notion"],
  },
  {
    title: "Team",
    items: ["1 Product Designer", "1 Developer", "1 Product Owner"],
  },
  {
    title: "Timeline",
    items: ["Overall: 6+ weeks", "Discovery & Research: 2+ weeks", "Design & Delivery: 4 weeks"],
  },
];

const processSteps = [
  "Business team alignment",
  "Objective definition",
  "Discovery",
  "Layout & Prototype",
  "A/B Test planning",
  "Result & impact",
];

const opportunities = [
  {
    value: "11",
    label: "planned opportunities",
    description: "Initially foreseen and aligned with the project scope.",
  },
  {
    value: "16",
    label: "unplanned or technically limited opportunities",
    description: "Ideas from research and workshops that had scope or implementation constraints.",
  },
  {
    value: "2",
    label: "partially feasible opportunities",
    description: "Proposals that could be explored further, but only partially addressed the identified needs.",
  },
  {
    value: "1",
    label: "new implementable opportunity",
    description: "An unexpected solution that was technically viable and aligned with the objectives.",
  },
];

const conversionRows = [
  { device: "All devices", version: "A", sessions: "321,923", conversion: "2.1%" },
  { device: "All devices", version: "B", sessions: "296,171", conversion: "2.3%" },
  { device: "Mobile", version: "A", sessions: "256,999", conversion: "2.2%" },
  { device: "Mobile", version: "B", sessions: "235,340", conversion: "2.4%" },
  { device: "Desktop", version: "A", sessions: "62,143", conversion: "5.1%" },
  { device: "Desktop", version: "B", sessions: "59,619", conversion: "5.4%" },
];

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

function MetricGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex min-h-[190px] flex-col items-center justify-center rounded-[24px] border border-[#e3e3e3] bg-[#f8f8f8] px-6 text-center"
        >
          <div className="text-[54px] font-light leading-none text-[#1f1f1f] md:text-[72px]">{metric.value}</div>
          <p className="mt-8 max-w-[220px] text-[18px] font-light leading-[1.25] text-[#1f1f1f]">{metric.label}</p>
        </div>
      ))}
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
      {caption && (
        <figcaption className="mt-3 text-[13px] font-light text-[#8b8b8b]">{caption}</figcaption>
      )}
    </figure>
  );
}

export function HeringPage() {
  return (
    <PasswordGate>
      <main className="bg-[#f8f8f8] font-light text-[#1f1f1f]">

        {/* Hero */}
        <section className="relative min-h-[540px] overflow-hidden">
          <img src={heringVisual} alt="" className="absolute inset-0 h-full w-full scale-[1.03] object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <ContentContainer className="relative flex min-h-[540px] items-end pb-16 pt-24 md:pb-20">
            <div className="max-w-[860px] text-white">
              <p className="text-[14px] font-light uppercase tracking-[0.28em] text-white/70">Hering</p>
              <h1 className="mt-6 text-[54px] font-light leading-[1.02] md:text-[92px]">Product Detail Page</h1>
              <p className="mt-8 max-w-[760px] text-[20px] font-light leading-[32px] text-white/86 md:text-[24px] md:leading-[38px]">
                Redesigning and Analysis Test (A/B) - New Hering's Product Detail Page
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Intro */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className="text-[30px] font-light leading-[1.25] text-[#1f1f1f] md:text-[38px]">
                Elevating the Product Experience for One of Brazil's Most Iconic Fashion Brands - Hering
              </h2>
              <a
                href="https://www.hering.com.br"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block text-[24px] font-light leading-[1.3] text-[#1f1f1f] underline decoration-[1px] underline-offset-4"
              >
                www.hering.com.br
              </a>
            </div>
            <div className="flex flex-col gap-7 text-[18px] font-light leading-[31px] text-[#1f1f1f] md:text-[20px] md:leading-[34px]">
              <p>
                Hering is one of Brazil's most iconic fashion brands, with over 140 years of history. It's part of
                Grupo AZZAS 2154, a major player in Latin American retail.
              </p>
              <p>
                I led the redesign of the Product Detail Page (PDP) on their e-commerce platform — an interface
                critical for conversion. The project involved input from business, creative, and customer support teams.
              </p>
            </div>
          </div>
        </ContentContainer>

        {/* Product GIFs */}
        <ContentContainer className="pb-16 md:pb-24">
          <div className="grid gap-4 md:grid-cols-3">
            <CaseImage src={gifProduct1} alt="Hering PDP interaction — product gallery" />
            <CaseImage src={gifProduct2} alt="Hering PDP interaction — size selection" />
            <CaseImage src={gifProduct3} alt="Hering PDP interaction — add to cart" />
          </div>
        </ContentContainer>

        {/* Metrics */}
        <ContentContainer className="pb-16 md:pb-24">
          <MetricGrid />
        </ContentContainer>

        {/* Overview */}
        <ContentContainer className="pb-16 md:pb-24">
          <div className="grid gap-4 md:grid-cols-4">
            {overview.map((item) => (
              <OverviewCard key={item.title} title={item.title} items={item.items} />
            ))}
          </div>
        </ContentContainer>

        {/* Process */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-14">
            <SectionHeading title="My Design Process" />
            <ProcessTimeline />
          </div>
        </ContentContainer>

        {/* 01 Business team alignment */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="01" title="Business team alignment" />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgWorkshop} alt="Workshop session with stakeholders" />
              <TextCard title="Collaborative workshop">
                <p>
                  I led a collaborative workshop with key stakeholders from the Commercial, Strategy, and Customer
                  Support teams to gather insights and pain points related to the Product Detail Page (PDP).
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 02 Objective definition */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="02" title="Objective definition" />
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5 text-[18px] font-light leading-[31px] md:text-[20px] md:leading-[34px]">
                  <p>
                    The main goals of the project were to reduce return rates and customer service contacts, while also
                    increasing conversion by addressing inconsistencies on the PDP.
                  </p>
                  <p>
                    We aimed to enhance the shopping experience by improving clarity in key information such as return
                    policies, shipping, product details, and unavailable sizes.
                  </p>
                  <p>
                    Additionally, we sought to deliver a more fluid navigation, better findability of product
                    information, and clearer promotion visibility, ultimately helping users make more confident
                    purchasing decisions.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    "Reduce returns and customer support contact around PDP information.",
                    "Increase conversion by reducing friction in product evaluation.",
                    "Improve the purchase experience with clearer content, states, and promotion visibility.",
                  ].map((item) => (
                    <div key={item} className="rounded-[24px] border border-[#1f1f1f] bg-[#1f1f1f] p-6">
                      <p className="text-[18px] font-light leading-[28px] text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CaseImage src={imgObjective} alt="Project objective mapping" />
            </div>
          </div>
        </ContentContainer>

        {/* 03 Discovery */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="03" title="Discovery" />
            <div className="flex flex-col gap-10">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
                <CaseImage src={imgBenchmarking} alt="Benchmarking analysis" />
                <TextCard title="Benchmarking and Structure Analysis">
                  <p>
                    I analyzed multiple competitor and reference e-commerces, mapping common structures and interface
                    patterns. The goal was to identify which components were most aligned with the pain points and
                    objectives raised during the workshop. This helped define a direction based on real, validated
                    solutions already in use across the market.
                  </p>
                </TextCard>
              </div>
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                <TextCard title="Component Breakdown and Usage Mapping">
                  <p>
                    After identifying relevant components, I organized them into categories and described their specific
                    functions and advantages. This allowed us to define which elements to prioritize in the redesign and
                    how they could be adapted or evolved to match our business and user needs.
                  </p>
                </TextCard>
                <CaseImage src={imgComponents} alt="Component breakdown mapping" />
              </div>
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
                <CaseImage src={imgInterviews} alt="Interview insights analysis" />
                <TextCard title="Interview Insights">
                  <p>
                    Due to time constraints and the project's scope, we leveraged existing interview materials
                    previously collected by other designers. We extracted key insights from this content, which guided
                    several decisions in the first layout iteration.
                  </p>
                </TextCard>
              </div>
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                <TextCard title="Q&A feature">
                  <p>
                    We also analyzed a Q&A feature available on the PDPs, which included real customer questions. To
                    organize this data, I used ChatGPT to cluster the comments by topic and rank them from most
                    frequently mentioned to least mentioned. This process helped uncover key pain points and usage
                    contexts, providing valuable insights that informed several visual and structural decisions in the
                    redesign.
                  </p>
                </TextCard>
                <CaseImage src={imgQA} alt="Q&A feature analysis" />
              </div>
            </div>
          </div>
        </ContentContainer>

        {/* Opportunities */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
              <TextCard title="Potential design opportunities">
                <p>
                  After mapping initial needs and identifying user pain points, we analyzed all collected insights to
                  define potential design opportunities. These were then aligned with the project's strategic goals.
                </p>
                <p>
                  We revisited each idea to revalidate priorities, ensuring we were focusing on the most impactful
                  changes. The goal was to guide design efforts toward solutions that directly addressed the business
                  and user needs raised at the beginning of the project.
                </p>
              </TextCard>
              <div className="grid gap-4 md:grid-cols-2">
                {opportunities.map((item) => (
                  <article key={item.label} className="rounded-[24px] border border-[#e3e3e3] bg-white/55 p-6">
                    <div className="text-[48px] font-light leading-none text-[#1f1f1f]">{item.value}</div>
                    <h3 className="mt-5 text-[21px] font-light leading-[1.25] text-[#1f1f1f]">{item.label}</h3>
                    <p className="mt-4 text-[16px] font-light leading-[26px] text-[#8b8b8b]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <CaseImage src={imgOpportunities} alt="Design opportunities mapping" />
          </div>
        </ContentContainer>

        {/* 04 Layout, Prototype, Handoff */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="04" title="Layout, Prototype, Handoff & Documentation" />
            <CaseImage src={imgDesignSystem} alt="Hering Design System reference" caption="Design System Hering — aligned with existing mobile app components" />
            <TextCard title="Design System Hering">
              <p>
                Hering already had an existing Design System developed by other teams, mainly focused on the mobile
                app. Throughout this project, we aligned our work with that system, using and validating existing
                components whenever possible.
              </p>
              <p>
                Because the web and app systems were managed separately, our goal was to bring consistency by adapting
                and reusing components rather than creating new ones from scratch. We ensured that the visual and
                functional decisions remained aligned with the app's design logic, maintaining coherence across
                platforms and avoiding unnecessary divergence.
              </p>
            </TextCard>
            <div className="grid gap-4 md:grid-cols-4">
              <CaseImage src={gifLayout1} alt="Layout prototype — interaction 1" />
              <CaseImage src={gifLayout2} alt="Layout prototype — interaction 2" />
              <CaseImage src={gifLayout3} alt="Layout prototype — interaction 3" />
              <CaseImage src={gifLayout4} alt="Layout prototype — interaction 4" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <figure>
                <img src={imgBefore} alt="PDP — before redesign" className="w-full rounded-[16px]" />
                <figcaption className="mt-3 text-[13px] font-light text-[#8b8b8b]">Before</figcaption>
              </figure>
              <figure>
                <img src={imgAfter} alt="PDP — after redesign" className="w-full rounded-[16px]" />
                <figcaption className="mt-3 text-[13px] font-light text-[#8b8b8b]">After</figcaption>
              </figure>
            </div>
            <CaseImage src={imgHandoff} alt="Handoff documentation" />
            <TextCard title="Efficient Handoff and Implementation Success" tone="dark">
              <p>
                We delivered a fully structured and highly detailed handoff, which resulted in only{" "}
                <strong className="text-white">two follow-up meetings</strong> to clarify minor implementation
                questions. The development team was able to implement the entire Product Detail Page in a very short
                time frame — thanks to the clarity and completeness of the documentation.
              </p>
              <p>
                All <strong className="text-white">scenarios, edge cases, component states, and usage details</strong>{" "}
                were carefully mapped, making the delivery not only easy to understand but also highly actionable. The
                dev team praised the quality of the handoff, highlighting how it reduced back-and-forth and helped
                them deliver with <strong className="text-white">speed and high fidelity</strong>.
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* 05 A/B Test Planning */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="05" title="A/B Test Planning" />
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              <CaseImage src={imgABTest} alt="A/B test planning documentation" />
              <TextCard title="Multivariate test">
                <p>
                  We started by defining our <strong>main hypothesis</strong>, the{" "}
                  <strong>goal of the test</strong>, and what specific elements we wanted to evaluate. The experiment
                  turned out to be a <strong>multivariate test</strong>, which was a valuable learning experience —
                  especially because, in the end, it produced <strong>biased data</strong> when comparing individual
                  components.
                </p>
                <p>
                  Despite the limitations, this test taught us important lessons about{" "}
                  <strong>test scope, isolation of variables, and data interpretation</strong>. It was a crucial step
                  in maturing our approach to A/B testing and conversion-focused validation.
                </p>
              </TextCard>
            </div>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
              <TextCard title="Analysis and monitoring">
                <p>
                  Together with the analytics team, we tracked A/B test performance using GA4 (Google Analytics) and
                  a custom dashboard created in partnership with an external analytics team. The data collection was
                  carried out between February 1st and 18th, and the results were analyzed between February 15th and
                  22nd.
                </p>
                <p>
                  This dashboard allowed us to monitor click events on key components, average page conversion rates,
                  time on page, and drop-off rates, helping us understand how each variation performed and where
                  users were engaging or dropping out.
                </p>
              </TextCard>
              <CaseImage src={imgAnalysis} alt="Analytics monitoring dashboard" />
            </div>
          </div>
        </ContentContainer>

        {/* 06 Results & Impact */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="06" title="Results & Impact" />
            <CaseImage src={imgResults} alt="A/B test results overview" />
            <MetricGrid />
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
              <div className="overflow-hidden rounded-[24px] border border-[#e3e3e3] bg-white/55">
                <table className="w-full text-left text-[15px] font-light text-[#1f1f1f]">
                  <thead className="border-b border-[#e3e3e3] text-[#8b8b8b]">
                    <tr>
                      <th className="px-5 py-4 font-light">Device</th>
                      <th className="px-5 py-4 font-light">Version</th>
                      <th className="px-5 py-4 font-light">Sessions</th>
                      <th className="px-5 py-4 font-light">Conv.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversionRows.map((row, index) => (
                      <tr key={`${row.device}-${row.version}`} className={index % 2 === 1 ? "bg-[#f1f1f1]" : ""}>
                        <td className="px-5 py-4">{row.device}</td>
                        <td className="px-5 py-4">{row.version}</td>
                        <td className="px-5 py-4">{row.sessions}</td>
                        <td className="px-5 py-4">{row.conversion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <TextCard title="Conversion Impact and Experience Improvements">
                <p>
                  After launching the new Product Detail Page, version B delivered an average conversion increase of{" "}
                  <strong>0.2 percentage points</strong>, reaching 2.3% compared to 2.1% in version A.
                </p>
                <p>
                  This uplift, while subtle, proved meaningful at scale, confirming that the adjustments positively
                  impacted user behavior across all devices.
                </p>
                <p>
                  In parallel to the quantitative gains, we addressed several UX inconsistencies, including unclear
                  return information, missing size states, and limited product visuals, which helped create a more
                  fluid and trustworthy shopping experience.
                </p>
              </TextCard>
            </div>
            <CaseImage src={imgConversion} alt="Conversion impact analysis" />
          </div>
        </ContentContainer>

        {/* Key Learnings */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <SectionHeading title="Key Learnings" />
            <div className="grid gap-6 md:grid-cols-3">
              <TextCard title="1. Key Learning">
                <p>
                  Although one of our initial goals was to reduce return rates and customer support demand, we did not
                  observe significant improvement in these areas. We monitored the outcome closely and concluded that
                  broader improvements across other parts of the journey would be necessary to impact these metrics.
                </p>
              </TextCard>
              <TextCard title="2. A/B Testing Complexity">
                <p>
                  One of the most valuable learnings was understanding the limitations of multifactor A/B testing.
                  While it allows for broad experimentation, it quickly becomes complex and highly biased if too many
                  hypotheses are tested simultaneously. In future projects, a more effective approach would be to run
                  smaller, more focused tests.
                </p>
              </TextCard>
              <TextCard title="3. Analytics Alignment">
                <p>
                  Another key takeaway relates to data analysis via Google Analytics. Without solid documentation and
                  defined KPIs from the start, aligning with analytics teams can become difficult later. This
                  reinforced the importance of defining what to measure early, ensuring clarity on business impact
                  and reducing rework during the analysis phase.
                </p>
              </TextCard>
            </div>
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
