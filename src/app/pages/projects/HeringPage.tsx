import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Scrollspy } from "../../components/design-system/Scrollspy";
import { PasswordGate } from "../../components/design-system/PasswordGate";
import { ContentContainer } from "../../components/design-system/ContentContainer";

import heringVisual from "../../../imports/hering/hero-hering.png";
import gifProduct1 from "../../../imports/hering/oaaNNAkpJq7bqjOO.gif";
import gifProduct2 from "../../../imports/hering/RdDLiYxhVtq8129l.gif";
import gifProduct3 from "../../../imports/hering/StxQdypoNoXRB8gX.gif";
import imgWorkshop from "../../../imports/hering/i6ga78AkHyWJkehV.webp";
import imgObjective from "../../../imports/hering/7sm1SPJUVhGbZSWy.webp";
import imgBenchmarking from "../../../imports/hering/y8IoGmXu3zJT5RAT.webp";
import imgInterviews from "../../../imports/hering/8QHTo8VqvbeXdCXd.webp";
import imgQA from "../../../imports/hering/lWL6etJhCQOVlpBi.webp";
import imgOpportunities from "../../../imports/hering/wRnXuj1Mpvwx9vIN.webp";
import imgDesignSystem from "../../../imports/hering/CPArummYgQljE0qS.webp";
import gifLayout1 from "../../../imports/hering/7EpP6wGaJnolaLHF.gif";
import gifLayout2 from "../../../imports/hering/NlLH5g8oWT5VCFL0.gif";
import gifLayout3 from "../../../imports/hering/oT3FZIyfnknzHdJg.gif";
import gifLayout4 from "../../../imports/hering/HuvyV0VInBHqBfOu.gif";
import imgHandoff from "../../../imports/hering/ABH0W7Z3CZOzbTkH.webp";
import imgABTest from "../../../imports/hering/kD2SbDW5cwg3z3Na.webp";
import imgAnalysis from "../../../imports/hering/BoyHM7BcF4sr3b4R.webp";
import imgResults from "../../../imports/hering/k4pGaHKaKCcj632J.webp";
import imgConversion from "../../../imports/hering/jJ4D1DWjzZ5hXinL.webp";
import imgPDPFull from "../../../imports/hering/pdp-full-page.webp";
import imgDSDeep from "../../../imports/hering/ab-hypothesis.png";
import imgHypothesisCard from "../../../imports/hering/hypothesis-card.png";
import imgResultsData from "../../../imports/hering/results-data-table.png";

// ─── Animation primitives ────────────────────────────────────────────────────

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
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

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
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

// ─── Scrollspy items ─────────────────────────────────────────────────────────

const SCROLLSPY_ITEMS = [
  { id: "stakeholder-alignment", label: "Stakeholder Alignment" },
  { id: "strategic-definition", label: "Strategic Definition" },
  { id: "insights-research", label: "Insights & Research" },
  { id: "experience-design", label: "Experience Design" },
  { id: "testing-strategy", label: "Testing Strategy" },
  { id: "final-analysis", label: "Final Analysis" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function HeringPage() {
  return (
    <main className="bg-white font-light text-[#1f1f1f]">
      <Scrollspy items={SCROLLSPY_ITEMS} />

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative flex h-[500px] flex-col justify-end overflow-hidden">
          <img
            src={heringVisual}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <ContentContainer className="relative pb-12 md:pb-16">
            <motion.h1
              className="text-[40px] font-light leading-tight text-white md:text-[64px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              Hering Product Detail Page
            </motion.h1>
            <motion.p
              className="mt-4 text-[18px] font-light text-white/80 md:text-[24px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              Redesign &amp; Optimization, Analysis Test (A/B).
            </motion.p>
          </ContentContainer>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <FadeUp delay={0} className="flex flex-col gap-8">
              <p className="text-[20px] font-normal leading-snug text-[#1f1f1f] md:text-[24px]">
                Enhancing the Hering Product Experience Page for One of Brazil's Most Iconic Fashion
                Brands in Latin American Retail with 4 million monthly visits.
              </p>
              <p className="text-[24px] font-normal text-[#1f1f1f] md:text-[32px]">
                www.hering.com.br
              </p>
            </FadeUp>
            <FadeUp delay={0.15} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#1f1f1f]">
              <p>
                Hering is one of Brazil's most iconic fashion brands, with over{" "}
                <strong className="font-medium">140 years of history.</strong> It's part of Grupo
                AZZAS 2154,{" "}
                <strong className="font-medium">a major player in Latin American retail.</strong>{" "}
                <strong className="font-medium">Receives 4 million monthly visits.</strong>
              </p>
              <p>
                I led the redesign of the Product Detail Page (PDP) on their e-commerce platform — an
                interface critical for conversion.{" "}
                <strong className="font-medium">
                  The project involved input from business, creative, and customer support teams.
                </strong>
              </p>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── Metrics ───────────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid md:grid-cols-3">
            {[
              { value: "+0.2%", label: "Conversion Lift" },
              { value: "-50%", label: "Development Time" },
              { value: "+9", label: "New Components" },
            ].map((m, i) => (
              <FadeUp
                key={m.label}
                delay={i * 0.12}
                className="flex flex-col items-center gap-8 py-8 text-center"
              >
                <p className="text-[56px] font-light leading-none text-[#1f1f1f] md:text-[80px]">
                  {m.value}
                </p>
                <p className="text-[20px] font-light text-[#5a5a5a] md:text-[24px]">{m.label}</p>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        {/* ── 3 Product GIFs ────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid gap-4 md:grid-cols-3 md:gap-[72px]">
            {[gifProduct1, gifProduct2, gifProduct3].map((gif, i) => (
              <FadeUp key={i} delay={i * 0.1} className="overflow-hidden rounded-[16px]">
                <img src={gif} alt="" className="w-full" />
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        {/* ── Role / Process / Stack ────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
            {[
              {
                title: "Role & Team",
                body: "Led as Product Designer and Workshop Facilitator within a specialized trio (PD, PO, and Dev).",
              },
              {
                title: "Process",
                body: "A 6-week agile sprint, balanced between 2 weeks of strategic Discovery and 4 weeks of iterative Delivery.",
              },
              {
                title: "Stack",
                body: "Powered by Google Analytics for research, Figma for design, and Notion/AI for streamlined documentation and workflow efficiency.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1} className="flex flex-col gap-4">
                <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">{item.title}</p>
                <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">{item.body}</p>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        {/* ── Stakeholder Alignment ─────────────────────────────────────────── */}
        <section id="stakeholder-alignment">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-start">
              <FadeUp delay={0} className="flex flex-col gap-8">
                <h2 className="text-[36px] font-light leading-tight text-[#1f1f1f] md:text-[56px]">
                  Stakeholder Alignment
                </h2>
                <p className="text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                  I facilitated a strategic workshop using FigJam to synchronize insights from Commercial,
                  Strategy, and Support teams, mapping business-critical pain points for the new PDP
                  experience.
                </p>
              </FadeUp>
              <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                <img
                  src={imgWorkshop}
                  alt="Workshop session with stakeholders"
                  className="w-full object-cover"
                />
              </FadeIn>
            </div>
          </ContentContainer>
        </section>

        {/* ── Dark Section: Strategic Definition + Insights & Research 1 ──── */}
        <section className="w-full bg-[#1f1f1f]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16 md:gap-[120px]">

              {/* Strategic Definition */}
              <div id="strategic-definition" className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-center">
                <FadeUp delay={0} className="flex flex-col gap-8">
                  <h2 className="text-[36px] font-light leading-tight text-white md:text-[56px]">
                    Strategic Definition
                  </h2>
                  <p className="text-[16px] font-normal leading-relaxed text-white">
                    FigJam workshop with Commercial, Strategy, and Support teams was essential to
                    uncover critical pain points and align on the project's North Star.
                  </p>
                  <p className="text-[16px] font-light leading-relaxed text-[#757575]">
                    We defined a strategic roadmap focused on boosting conversion and reducing return
                    rates by improving stock visibility and information clarity, ensuring a
                    high-performance experience for the new Hering PDP.
                  </p>
                </FadeUp>
                <FadeIn delay={0.2} className="overflow-hidden rounded-[16px] opacity-60">
                  <img
                    src={imgObjective}
                    alt="Strategic definition roadmap"
                    className="w-full object-cover"
                  />
                </FadeIn>
              </div>

              {/* Insights & Research 1 */}
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-center">
                <FadeIn delay={0.2} className="overflow-hidden rounded-[16px] opacity-60">
                  <img
                    src={imgBenchmarking}
                    alt="Benchmarking and research"
                    className="w-full object-cover"
                  />
                </FadeIn>
                <FadeUp delay={0} className="flex flex-col gap-8">
                  <h2 className="text-[36px] font-light leading-tight text-white md:text-[56px]">
                    Insights &amp; Research
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[20px] font-normal leading-snug text-white md:text-[24px]">
                        Benchmarking &amp; Analysis.
                      </p>
                      <p className="mt-2 text-[16px] font-light leading-relaxed text-[#757575]">
                        I mapped competitor patterns and interface structures to align the redesign with
                        market standards. This research ensured our strategic direction was grounded in
                        validated industry solutions and user expectations.
                      </p>
                    </div>
                    <div>
                      <p className="text-[20px] font-normal leading-snug text-white md:text-[24px]">
                        Component Architecture.
                      </p>
                      <p className="mt-2 text-[16px] font-light leading-relaxed text-[#757575]">
                        I categorized and mapped UI elements to prioritize the most impactful features
                        for the redesign. This breakdown allowed us to evolve components for better
                        scalability, balancing business goals with user needs.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

            </div>
          </ContentContainer>
        </section>

        {/* ── Insights & Research 2 ─────────────────────────────────────────── */}
        <section id="insights-research">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-start">
              <FadeUp delay={0} className="flex flex-col gap-8">
                <h2 className="text-[36px] font-light leading-tight text-[#1f1f1f] md:text-[56px]">
                  Insights &amp; Research 2
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                    Interview Insights.
                  </p>
                  <p className="text-[16px] font-light leading-relaxed text-[#757575]">
                    Due to time constraints and the project's scope, we leveraged existing interview
                    materials previously collected by other designers.
                  </p>
                  <p className="text-[16px] font-light leading-relaxed text-[#757575]">
                    We extracted key insights from this content, which guided several decisions in the
                    first layout iteration.
                  </p>
                </div>
              </FadeUp>
              <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                <img
                  src={imgInterviews}
                  alt="Interview insights"
                  className="w-full object-cover"
                />
              </FadeIn>
            </div>
          </ContentContainer>
        </section>

        <Divider />

        {/* ── AI Analysis + Prioritization ──────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-16 md:grid-cols-2 md:gap-[72px]">
            <FadeUp delay={0} className="flex flex-col gap-8">
              <div>
                <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                  AI-Driven Analysis
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                  Q&amp;A Data Synthesis — I analyzed the PDP's Q&amp;A feature, using AI to cluster
                  and rank real customer inquiries. This process uncovered hidden pain points and
                  specific usage contexts, allowing us to prioritize structural changes that directly
                  address user doubts and friction.
                </p>
              </div>
              <FadeIn delay={0.1} className="h-[280px] overflow-hidden rounded-[16px] opacity-80">
                <img src={imgQA} alt="AI-driven Q&A analysis" className="h-full w-full object-cover" />
              </FadeIn>
            </FadeUp>
            <FadeUp delay={0.15} className="flex flex-col gap-8">
              <div>
                <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                  Prioritization &amp; Opportunity Mapping
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                  We mapped 29+ opportunities, prioritizing 11 high-impact initiatives and uncovering
                  one high-value, unplanned solution. This process ensured a roadmap aligned with
                  technical feasibility, business goals, and real user needs.
                </p>
              </div>
              <FadeIn delay={0.2} className="h-[280px] overflow-hidden rounded-[16px] opacity-80">
                <img
                  src={imgOpportunities}
                  alt="Prioritization and opportunity mapping"
                  className="h-full w-full object-cover"
                />
              </FadeIn>
            </FadeUp>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Opportunity Stats ─────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-[72px]">
            {[
              {
                title: "11 Planned Initiatives",
                body: "Aligned with the original project scope, these core opportunities were prioritized to drive immediate value and meet the primary business objectives.",
              },
              {
                title: "16 Strategic Backlog",
                body: "Identified during discovery, these unplanned or technically constrained ideas were mapped for future cycles, keeping the current design focused on high-impact changes.",
              },
              {
                title: "2 Research Explorations",
                body: "These partially feasible proposals address specific user needs and remain under exploration, providing a foundation for long-term product evolution.",
              },
              {
                title: "1 High-Value Discovery",
                body: "Uncovered during the research process, this unexpected yet technically viable solution was integrated to address a critical, previously unconsidered user pain point.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08} className="flex flex-col gap-4">
                <p className="text-[18px] font-normal text-[#1f1f1f] md:text-[24px]">{item.title}</p>
                <p className="text-[15px] font-light leading-relaxed text-[#5a5a5a] md:text-[16px]">
                  {item.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        <Divider />

        {/* ── 4 Mobile Screens — Experience Design ──────────────────────────── */}
        <section id="experience-design">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-[72px]">
              {[gifLayout1, gifLayout2, gifLayout3, gifLayout4].map((gif, i) => (
                <FadeUp key={i} delay={i * 0.1} className="overflow-hidden rounded-[16px]">
                  <img src={gif} alt={`Layout prototype ${i + 1}`} className="w-full" />
                </FadeUp>
              ))}
            </div>
          </ContentContainer>
        </section>

        <Divider />

        {/* ── Design System Hering ──────────────────────────────────────────── */}
        <section>
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-start">
                <FadeUp delay={0} className="flex flex-col gap-8">
                  <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                    Design System Hering
                  </p>
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                      To ensure a seamless brand experience, I aligned the new web PDP with Hering's
                      existing mobile Design System — adapting and validating mobile components for
                      the web to avoid divergence and maintain visual and functional coherence.
                    </p>
                    <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                      Beyond adapting the app system, I led the creation of a dedicated{" "}
                      <strong className="font-normal text-[#1f1f1f]">Web Design System</strong>{" "}
                      — two Figma library files (Bases &amp; Components and Design Tokens) built
                      from scratch with all components fully connected to tokens, enabling
                      developers to reference exact CSS variables directly from each component.
                    </p>
                  </div>
                </FadeUp>
                <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                  <img src={imgDesignSystem} alt="Hering Design System" className="w-full" />
                </FadeIn>
              </div>
              <FadeIn delay={0.1} className="overflow-hidden rounded-[16px]">
                <img src={imgDSDeep} alt="Hering Design System component anatomy with tokens" className="w-full" />
              </FadeIn>
            </div>
          </ContentContainer>
        </section>

        <Divider />

        {/* ── Wide Handoff ──────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <FadeIn delay={0.1} className="w-full overflow-hidden rounded-[16px]">
            <img src={imgHandoff} alt="Handoff documentation" className="w-full" />
          </FadeIn>
        </ContentContainer>

        {/* ── Handoff Text ──────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <FadeUp delay={0}>
              <p className="text-[18px] font-normal leading-snug text-[#1f1f1f] md:text-[24px]">
                We delivered a fully structured and highly detailed handoff, which resulted in only
                two follow-up meetings to clarify minor implementation questions.
              </p>
              <p className="mt-4 text-[18px] font-medium leading-snug text-[#1f1f1f] md:text-[24px]">
                Mobile First &amp; Desktop.
              </p>
            </FadeUp>
            <FadeUp delay={0.15} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#1f1f1f]">
              <p>
                The development team was able to implement the entire Product Detail Page in a very
                short time frame, thanks to the clarity and completeness of the documentation.
              </p>
              <p>
                We redesigned the PDP to eliminate information gaps and reduce cognitive load. By
                refining the visual hierarchy and clarifying shipping, stock, and return policies, we
                created a more fluid navigation that empowers users to make faster, more confident
                purchasing decisions.
              </p>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── Scrollable Mockup ─────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <FadeIn>
            <div className="overflow-hidden rounded-[16px] border-2 border-[#757575]">
              <div className="max-h-[804px] overflow-y-auto">
                <img src={imgPDPFull} alt="Full Product Detail Page design" className="w-full" />
              </div>
            </div>
          </FadeIn>
        </ContentContainer>

        {/* ── Gray Section — Testing Strategy ───────────────────────────────── */}
        <section id="testing-strategy" className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16 md:gap-[120px]">

              {/* A/B Hypothesis */}
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-center">
                <FadeUp delay={0} className="flex flex-col gap-6">
                  <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                    Structured Hypothesis
                  </p>
                  <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                    Before building anything, we documented a clear belief statement: the current PDP
                    created friction in key decision moments — missing size availability cues,
                    unclear returns policy, and weak image hierarchy.
                  </p>
                  <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                    The hypothesis connected each design action directly to an expected business
                    outcome — reducing SAC contact about returns and shipping, while improving
                    average conversion across all devices.
                  </p>
                </FadeUp>
                <FadeIn delay={0.15} className="overflow-hidden rounded-[16px]">
                  <img src={imgHypothesisCard} alt="A/B test hypothesis framework" className="w-full" />
                </FadeIn>
              </div>

              {/* Multivariate Test */}
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-center">
                <FadeUp delay={0} className="flex flex-col gap-6">
                  <p className="text-[20px] font-light text-[#1f1f1f] md:text-[24px]">
                    Multivariate test
                  </p>
                  <div className="flex flex-col gap-4 text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                    <p>
                      We executed a multivariate test to validate conversion hypotheses, which proved
                      to be a critical learning milestone.
                    </p>
                    <p>
                      While the experiment produced biased data for individual components, it provided
                      vital lessons on variable isolation and scope planning, maturing our long-term
                      approach to data-driven validation.
                    </p>
                  </div>
                </FadeUp>
                <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                  <img src={imgABTest} alt="A/B test planning" className="w-full" />
                </FadeIn>
              </div>

              {/* Analysis and Monitoring */}
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-center">
                <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                  <img src={imgAnalysis} alt="Analytics monitoring dashboard" className="w-full" />
                </FadeIn>
                <FadeUp delay={0} className="flex flex-col gap-6">
                  <p className="text-[20px] font-light text-[#1f1f1f] md:text-[24px]">
                    Analysis and monitoring
                  </p>
                  <div className="flex flex-col gap-4 text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                    <p>
                      Together with the analytics team, we tracked A/B test performance using GA4
                      (Google Analytics) and a custom dashboard. Data collection ran from February 1st
                      to 18th; results were analyzed between February 15th and 22nd.
                    </p>
                    <p>
                      While the experiment produced biased data for individual components, it provided
                      vital lessons on variable isolation and scope planning, maturing our long-term
                      approach to data-driven validation.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Wide Results Image */}
              <FadeIn className="overflow-hidden rounded-[16px]">
                <img src={imgResults} alt="A/B test results" className="w-full" />
              </FadeIn>

            </div>
          </ContentContainer>
        </section>

        {/* ── Results Data Table ────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-center">
            <FadeIn delay={0} className="overflow-hidden rounded-[16px]">
              <img src={imgResultsData} alt="A/B test results by device type" className="w-full" />
            </FadeIn>
            <FadeUp delay={0.15} className="flex flex-col gap-6">
              <p className="text-[20px] font-normal text-[#1f1f1f] md:text-[24px]">
                Results by Device
              </p>
              <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                Across 618,000+ combined sessions over 17 days, Version B consistently outperformed
                Version A on every device type — with mobile showing the strongest relative gain at
                +0.2pp, directly validating the mobile-first design approach.
              </p>
              <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                Desktop also improved from 5.1% to 5.4%, confirming that the changes to information
                hierarchy benefited the experience across all screen sizes.
              </p>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── Metrics (repeated) ────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid md:grid-cols-3">
            {[
              { value: "+0.2%", label: "Conversion Lift" },
              { value: "-50%", label: "Development Time" },
              { value: "+9", label: "New Components" },
            ].map((m, i) => (
              <FadeUp
                key={m.label}
                delay={i * 0.12}
                className="flex flex-col items-center gap-8 py-8 text-center"
              >
                <p className="text-[56px] font-light leading-none text-[#1f1f1f] md:text-[80px]">
                  {m.value}
                </p>
                <p className="text-[20px] font-light text-[#5a5a5a] md:text-[24px]">{m.label}</p>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        {/* ── Results Text ──────────────────────────────────────────────────── */}
        <section id="final-analysis">
          <ContentContainer className="pb-16 md:pb-[120px]">
            <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
              <FadeUp delay={0} className="flex flex-col gap-6">
                <p className="text-[18px] font-normal leading-snug text-[#1f1f1f] md:text-[24px]">
                  After launching the new Product Detail Page, version B delivered an average
                  conversion increase of 0.2 percentage points, reaching 2.3% compared to 2.1% in
                  version A.
                </p>
                <p className="text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                  This uplift, while subtle, proved meaningful at scale, confirming that the
                  adjustments positively impacted user behavior across all devices.
                </p>
              </FadeUp>
              <FadeUp delay={0.12} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                <p>
                  In parallel to the quantitative gains, we addressed several UX inconsistencies,
                  including unclear return information, missing size states, and limited product
                  visuals, which helped create a more fluid and trustworthy shopping experience.
                </p>
                <p>
                  Together, these improvements not only supported our conversion goals but also
                  enhanced the overall decision-making journey for users.
                </p>
              </FadeUp>
              <FadeIn delay={0.2} className="overflow-hidden rounded-[16px]">
                <img src={imgConversion} alt="Conversion impact analysis" className="w-full" />
              </FadeIn>
            </div>
          </ContentContainer>
        </section>

        {/* ── Key Learnings ─────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
            {[
              {
                title: "1. Key Learning",
                body: "Although one of our initial goals was to reduce return rates and customer support demand, we did not see significant improvements in these areas. Broader improvements across other parts of the journey are needed to affect these metrics.",
              },
              {
                title: "2. A/B Testing Complexity",
                body: "One of the most valuable insights was understanding the limits of multifactor A/B testing. Future projects would benefit from smaller, more focused tests, each linked to a clear business goal — to ensure clearer validation and decision-making.",
              },
              {
                title: "3. Analytics Alignment",
                body: "Without solid documentation and defined KPIs from the start, aligning with analytics teams can become difficult later. This reinforced the importance of defining what to measure early, ensuring clarity on business impact.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1} className="flex flex-col gap-4">
                <p className="text-[18px] font-normal text-[#1f1f1f] md:text-[24px]">{item.title}</p>
                <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">{item.body}</p>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>

        {/* ── Closing ───────────────────────────────────────────────────────── */}
        <ContentContainer className="pb-16 pt-8 md:pb-[120px] md:pt-16">
          <div className="flex flex-col items-center gap-8 text-center">
            <FadeUp className="flex flex-col gap-4">
              <h2 className="text-[36px] font-light text-[#1f1f1f] md:text-[56px]">
                Thanks for watching!
              </h2>
              <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#1f1f1f]">
                This redesign was a major step in maturing Hering's digital experience.
                <br />
                If you'd like to dive deeper into the metrics or the process behind this case, feel
                free to reach out!
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <button className="cursor-pointer rounded-full bg-[#1f1f1f] px-6 py-3 text-[16px] font-normal text-white transition-opacity hover:opacity-80">
                Next project
              </button>
            </FadeUp>
          </div>
        </ContentContainer>

      </main>
  );
}
