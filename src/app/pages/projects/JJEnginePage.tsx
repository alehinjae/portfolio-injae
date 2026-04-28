import { motion } from "framer-motion";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import { Scrollspy } from "../../components/design-system/Scrollspy";
import type { ReactNode } from "react";

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

// ─── Image placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ label, aspect = "aspect-[16/9]" }: { label: string; aspect?: string }) {
  return (
    <FadeIn>
      <div className={`w-full overflow-hidden rounded-[16px] bg-[#f0f0f0] ${aspect} flex items-center justify-center`}>
        <p className="text-[13px] font-light text-[#b3b3b3] px-8 text-center">{label}</p>
      </div>
    </FadeIn>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeading({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <p className={`text-[12px] font-normal uppercase tracking-[0.1em] ${light ? "text-white/40" : "text-[#b3b3b3]"}`}>{eyebrow}</p>
        )}
        <h2 className={`text-[36px] font-light leading-tight md:text-[56px] ${light ? "text-white" : "text-[#1f1f1f]"}`}>{title}</h2>
      </div>
    </FadeUp>
  );
}

function TextBlock({ label, children, light = false }: { label?: string; children: ReactNode; light?: boolean }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-4">
        {label && <p className={`text-[20px] font-normal md:text-[24px] ${light ? "text-white" : "text-[#1f1f1f]"}`}>{label}</p>}
        <div className={`flex flex-col gap-4 text-[16px] font-light leading-relaxed ${light ? "text-white/60" : "text-[#5a5a5a]"}`}>
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

function DarkCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <FadeUp>
      <div className="rounded-[16px] bg-[#1f1f1f] p-8 md:p-10">
        <p className="text-[20px] font-normal text-white md:text-[24px]">{title}</p>
        <div className="mt-5 flex flex-col gap-4 text-[16px] font-light leading-relaxed text-white/60">
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const overview = [
  { title: "My Role", items: ["UX/UI Design", "Experience Architecture", "Design System"] },
  { title: "Tools", items: ["Figma", "Sketch", "FigJam"] },
  { title: "Team", items: ["1 UX/UI Designer", "1 UX Lead", "1 Project Manager", "Frontend & Backend Devs"] },
  { title: "Timeline", items: ["2019–2023 (5 years)", "Engine pivot: 2022", "Internationalization: 2023"] },
];

const SCROLLSPY_ITEMS = [
  { id: "challenge", label: "The Challenge" },
  { id: "architecture", label: "Engine Architecture" },
  { id: "flow-design", label: "Flow Design" },
  { id: "compliance", label: "Compliance & Legal" },
  { id: "design-system", label: "Design System" },
  { id: "impact", label: "Scale & Impact" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function JJEnginePage() {
  return (
    <main className="bg-white font-light text-[#1f1f1f]">
      <Scrollspy items={SCROLLSPY_ITEMS} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="flex h-[500px] flex-col justify-end bg-[#1a1a1a]">
        <ContentContainer className="pb-12 md:pb-16">
          <motion.p
            className="text-[13px] font-normal uppercase tracking-[0.1em] text-white/40"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            Johnson &amp; Johnson — Mirum Agency
          </motion.p>
          <motion.h1
            className="mt-4 text-[40px] font-light leading-tight text-white md:text-[64px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            J&amp;J Experience Engine
          </motion.h1>
          <motion.p
            className="mt-4 text-[18px] font-light text-white/60 md:text-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            A scalable authentication &amp; CRM platform serving 9 consumer brands across Brazil and Mexico.
          </motion.p>
        </ContentContainer>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[120px]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
          <FadeUp>
            <h2 className="text-[28px] font-light leading-snug text-[#1f1f1f] md:text-[36px]">
              From isolated campaigns to a reusable authentication engine — built at enterprise scale.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
            <p>
              Over five years at Mirum Agency, I helped design the digital experience infrastructure for Johnson &amp; Johnson's consumer portfolio in Brazil —{" "}
              <strong className="font-normal text-[#1f1f1f]">including Listerine, Neutrogena, Johnson's Baby, Hipoglos, Neostrata, and Kenvue.</strong>
            </p>
            <p>
              What started as individual campaign hotsites evolved into a{" "}
              <strong className="font-normal text-[#1f1f1f]">
                unified experience engine: a reusable authentication and CRM system
              </strong>{" "}
              that eliminated redundant design work, consolidated user data across brands, and scaled to international markets without a redesign.
            </p>
          </FadeUp>
        </div>
      </ContentContainer>

      {/* ── Metrics ───────────────────────────────────────────────────────── */}
      <ContentContainer className="pb-16 md:pb-[120px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "9", label: "Brands Served" },
            { value: "16", label: "Core Flow States" },
            { value: "~80%", label: "Cost Reduction per Launch" },
            { value: "5 yrs", label: "Production Timeline" },
          ].map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.1} className="flex flex-col items-center gap-4 py-8 text-center">
              <p className="text-[48px] font-light leading-none text-[#1f1f1f] md:text-[64px]">{m.value}</p>
              <p className="text-[14px] font-light text-[#5a5a5a] md:text-[16px]">{m.label}</p>
            </FadeUp>
          ))}
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

      {/* ── Challenge ─────────────────────────────────────────────────────── */}
      <section id="challenge">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="01" title="The Challenge" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="A structural problem hiding in plain sight">
                <p>
                  A company with 9 consumer brands running digital campaigns faces a recurring structural issue: every promotion, every hotsite, every seasonal campaign needs login and registration. When each initiative reinvents that flow from scratch, the cost is threefold.
                </p>
                <p>
                  This wasn't a UX problem. It was a <strong className="font-normal text-[#1f1f1f]">systems architecture problem</strong> — and solving it required thinking beyond the screen.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Archive structure — 2019 isolated campaigns" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <LightCard title="Production Cost">
                <p>
                  Redesigning the same 36+ screens for each campaign — login, registration, email verification, password recovery, logged area — for every brand, every launch cycle.
                </p>
              </LightCard>
              <LightCard title="Data Fragmentation">
                <p>
                  Separate user databases per campaign made it impossible to build cross-brand user histories, unified profiles, or meaningful CRM segmentation.
                </p>
              </LightCard>
              <LightCard title="Trust Inconsistency">
                <p>
                  Users encountered different interfaces for the same actions across brands of the same group — undermining the sense of a unified, reliable ecosystem.
                </p>
              </LightCard>
            </div>

            <div className="grid gap-10 md:grid-cols-2 md:gap-[72px] md:items-start">
              <TextBlock label="Two acts — the archive tells the story">
                <p>
                  Looking at the project archive over 5 years reveals the evolution in two clear phases. In Act 1 (2019–2021), every project folder contained its own privacy policy document, its own login screens, its own registration flow. The redundancy was structural.
                </p>
                <p>
                  In Act 2 (2022), the folder structure changed. Projects gained formal ticket IDs, and three separate login/registration deliveries — for Neutrogena, Listerine, and Neostrata — shared <strong className="font-normal text-[#1f1f1f]">identical internal anatomy</strong>. That's not a design coincidence. That's a system.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Wireflow v1/v2 — J&J_NovaEngine_Promos (2022)" aspect="aspect-[4/3]" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── Architecture ──────────────────────────────────────────────────── */}
      <section id="architecture" className="w-full bg-[#1f1f1f]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16 md:gap-[120px]">

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <div className="flex flex-col gap-8">
                <SectionHeading eyebrow="02" title="Engine Architecture" light />
                <FadeUp delay={0.1}>
                  <p className="text-[16px] font-light leading-relaxed text-white/60">
                    An Engine, in experience architecture, is a set of flows and components that solves a fixed set of problems — while accepting contextual variables. The J&amp;J Engine resolves authentication across any brand without being rebuilt each time.
                  </p>
                </FadeUp>
              </div>
              <ImagePlaceholder label="Engine architecture diagram — core flow vs. brand variables" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-center">
              <ImagePlaceholder label="Neutrogena LoginCadastro — v1 screen anatomy (57 specs)" aspect="aspect-[4/3]" />
              <TextBlock label="The same anatomy across three brands" light>
                <p>
                  The Neutrogena Login/Registration project in 2022 delivered 57 HTML specification files in v1, and 44 screens in v2/v3. The same sequence — from screen 00 (Registration) to screen 16 (Email Change Complete) — was replicated identically for Listerine and Neostrata.
                </p>
                <p>
                  Same numbering. Same logic. Same state coverage. Only the visual layer changed. This is proof of system — not coincidence of design.
                </p>
              </TextBlock>
            </div>

            <FadeUp>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { brand: "Neutrogena", detail: "188650 — v1: 57 specs, v2/v3: 44 screens" },
                  { brand: "Listerine", detail: "202188 — Full engine deployment, brand variables applied" },
                  { brand: "Neostrata", detail: "218177 — Engine extended to skincare segment" },
                ].map((item) => (
                  <div key={item.brand} className="rounded-[16px] border border-white/10 p-8">
                    <p className="text-[20px] font-normal text-white">{item.brand}</p>
                    <p className="mt-3 text-[14px] font-light leading-relaxed text-white/40">{item.detail}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </ContentContainer>
      </section>

      {/* ── Flow Design ───────────────────────────────────────────────────── */}
      <section id="flow-design">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="03" title="Flow Design" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="16 states. Every edge case covered.">
                <p>
                  What appears simple on the surface — a login page, a sign-up form — conceals significant functional depth. Each flow in the engine covers not just the happy path, but every state of error, delay, and alternative.
                </p>
                <p>
                  The engine core handles four primary flows, each with full state coverage: Registration, Email Verification, Password Recovery, and Email Change.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Full state map — 16 core screens + 5 email templates" aspect="aspect-[4/3]" />
            </div>

            <FadeUp delay={0.1}>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { code: "00–02", label: "Registration", desc: "Progressive capture — credentials, personal data, contextual profile" },
                  { code: "03–05", label: "Login & Recovery", desc: "Login + forgot password A/B with resend state" },
                  { code: "06–11", label: "Logged Area", desc: "Personal data dashboard, password change, profile edit" },
                  { code: "12–16", label: "Email Change", desc: "5-step secure flow with dual-email verification" },
                ].map((item) => (
                  <div key={item.code} className="flex flex-col gap-3 border-t-2 border-[#1f1f1f] pt-4">
                    <span className="text-[11px] font-normal uppercase tracking-[0.1em] text-[#b3b3b3]">{item.code}</span>
                    <span className="text-[16px] font-normal text-[#1f1f1f]">{item.label}</span>
                    <span className="text-[14px] font-light leading-relaxed text-[#5a5a5a]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <Divider />

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <ImagePlaceholder label="Email change flow — screens 12–16 with A/B states" aspect="aspect-[4/3]" />
              <TextBlock label="The email change flow — enterprise-level security by design">
                <p>
                  The most sophisticated flow in the engine: changing an account email without compromising security. The process spans 5 screen states and 2 transactional email templates — one confirming the new address, one alerting the old address as a security measure.
                </p>
                <p>
                  Designing this flow as a POC before the formal delivery (ticket 171115_POC_FluxoTrocaEmail) was itself a strategic decision — validating the logic before committing to full specification.
                </p>
                <p>
                  This is <strong className="font-normal text-[#1f1f1f]">enterprise transactional design</strong>, not campaign hotsite design.
                </p>
              </TextBlock>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="Progressive registration — solving the data/friction tradeoff">
                <p>
                  The classic dilemma: the more data we request, the fewer users complete registration. The engine's solution was progressive capture — collecting minimum credentials to authenticate, then enriching the CRM profile over time.
                </p>
                <p>
                  Step 1 captures email and password. Step 2 collects personal data. Step 3 gathers contextual information — gestational phase, product usage, brand preference. Each step feeds the CRM with increasingly qualified data.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Progressive registration flow — 3-step data capture" aspect="aspect-[4/3]" />
            </div>

          </div>
        </ContentContainer>
      </section>

      <Divider />

      {/* ── Compliance ────────────────────────────────────────────────────── */}
      <section id="compliance">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="04" title="Compliance by Design" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="LGPD as a design challenge">
                <p>
                  Brazil's General Data Protection Law (LGPD) came into force in 2020. By 2022, it had been fully absorbed into the engine's architecture — not as an afterthought, but as a structural component.
                </p>
                <p>
                  The evolution from 2019 to 2022 is instructive: compliance went from a destination (a standalone privacy policy page the user could navigate to) to a component — woven into every touchpoint of the registration flow.
                </p>
              </TextBlock>
              <ImagePlaceholder label="LGPD component evolution — 2019 standalone vs. 2022 integrated" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DarkCard title="Before: Compliance as Content">
                <p>
                  In 2019, each project had its own privacy policy page — a standalone screen the user could visit if they chose. Terms existed as separate HTML files. Consent was passive.
                </p>
                <p>
                  The law was technically met, but the experience placed the burden of understanding on the user.
                </p>
              </DarkCard>
              <DarkCard title="After: Compliance as Component">
                <p>
                  By 2022, consent was a required checkbox that blocked flow progression. The timestamp of acceptance was recorded for audit. A granular Cookie Manager allowed category-level control. The logged-area header visibly reflected the user's authenticated state.
                </p>
                <p>
                  Legal obligation became a transparency feature — and a competitive differentiator.
                </p>
              </DarkCard>
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
              <TextBlock label="Fragmented legal density">
                <p>
                  Instead of presenting all terms on a single screen, consent was distributed across the flow — summary checkbox at registration, full documents accessible via footer, terms available in FAQ, not mandatory.
                </p>
              </TextBlock>
              <TextBlock label="Consent as a positive action">
                <p>
                  The checkbox was placed at the end of registration — a confirmation of what the user already decided, not a barrier before they could begin. A subtle but significant psychological shift that improved completion rates.
                </p>
              </TextBlock>
              <TextBlock label="Cookie Manager as UX">
                <p>
                  The Cookie Manager documented in the Mexico deployment wasn't a generic blocking banner — it was an interface with individually selectable categories, turning a legal requirement into a moment of transparency.
                </p>
              </TextBlock>
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* ── Design System ─────────────────────────────────────────────────── */}
      <section id="design-system" className="w-full bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="05" title="Design System" />

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <ImagePlaceholder label="J&J_DesignSystem_v1 — component library and token architecture" aspect="aspect-[4/3]" />
              <TextBlock label="A design system built for parametrization">
                <p>
                  The J&J DesignSystem_v1 wasn't built as a visual style guide. It was built as a <strong className="font-normal text-[#1f1f1f]">parametrization layer</strong> — the infrastructure that allowed the same 16 screens to become Neutrogena, then Listerine, then Neostrata, without rebuilding components from scratch.
                </p>
                <p>
                  The StyleGuide_Marcas project (ticket 188651) formalized this model: each brand's identity — typography, color palette, logo, iconography — was defined as a set of variables applied on top of the engine's shared component structure.
                </p>
              </TextBlock>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="From Sketch to Figma — a tool transition mid-delivery">
                <p>
                  The 2022 engine pivot coincided with the team's migration from Sketch to Figma. This wasn't just a tooling change — it was an opportunity to rebuild design assets with stronger component architecture, auto-layout, and variable systems that Figma enabled.
                </p>
                <p>
                  The HTML specification files (Specs) delivered to developers — interactive per-screen files with exact measurements, hex values, pixel-level typography — remained the gold standard for handoff regardless of the design tool.
                </p>
              </TextBlock>
              <ImagePlaceholder label="StyleGuide_Marcas — brand variable system across Neutrogena, Listerine, Neostrata" aspect="aspect-[4/3]" />
            </div>

            <FadeUp>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    label: "Engine Core",
                    items: ["Shared component library", "16 authenticated states", "5 email templates", "Error & loading states"],
                  },
                  {
                    label: "Brand Variables",
                    items: ["Typography per brand", "Color palette tokens", "Logo & imagery guidelines", "Tone of voice & microcopy"],
                  },
                ].map((col) => (
                  <div key={col.label} className="rounded-[16px] bg-white p-8 md:p-10">
                    <p className="text-[16px] font-normal text-[#1f1f1f]">{col.label}</p>
                    <ul className="mt-5 flex flex-col gap-3">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] font-light text-[#5a5a5a]">
                          <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#b3b3b3]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </ContentContainer>
      </section>

      {/* ── Impact ────────────────────────────────────────────────────────── */}
      <section id="impact">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="06" title="Scale &amp; Impact" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="CRM unification — the real strategic objective">
                <p>
                  The engine's deepest value wasn't the registration UX. It was the <strong className="font-normal text-[#1f1f1f]">unified user database it produced</strong>. A user who registered via a Listerine promotion and later participated in a Neutrogena campaign could be recognized as the same person — with a cross-brand profile enriched by both interactions.
                </p>
                <p>
                  A fragmented database (one Listerine record + one Neutrogena record per user) has limited CRM value. A unified profile with cross-brand history enables segmentations that are impossible any other way.
                </p>
              </TextBlock>
              <ImagePlaceholder label="CRM data unification model — cross-brand user profile" aspect="aspect-[4/3]" />
            </div>

            <FadeUp>
              <div className="grid gap-[1px] overflow-hidden rounded-[16px] border border-[#e3e3e3] md:grid-cols-2">
                {[
                  { label: "Without the Engine", items: ["New campaign = full redesign (36+ screens)", "Separate legal review cycle", "New development sprint", "Fragmented user database", "Cost: 100% per launch"] },
                  { label: "With the Engine", items: ["New campaign = fork + brand variables", "Legal review of delta only", "Configuration, not development", "Unified cross-brand CRM profile", "Cost: ~20–30% per launch"] },
                ].map((col, i) => (
                  <div key={col.label} className={`p-8 md:p-10 ${i === 0 ? "bg-[#f5f5f5]" : "bg-[#1f1f1f]"}`}>
                    <p className={`text-[16px] font-normal ${i === 0 ? "text-[#1f1f1f]" : "text-white"}`}>{col.label}</p>
                    <ul className="mt-6 flex flex-col gap-4">
                      {col.items.map((item) => (
                        <li key={item} className={`flex items-start gap-3 text-[15px] font-light ${i === 0 ? "text-[#5a5a5a]" : "text-white/50"}`}>
                          <span className={`mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full ${i === 0 ? "bg-[#b3b3b3]" : "bg-white/30"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeUp>

            <Divider />

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <ImagePlaceholder label="CadastroMexico — engine adapted for Spanish-language market (2023)" aspect="aspect-[4/3]" />
              <TextBlock label="Mexico — proving portability">
                <p>
                  In 2023, the engine was adapted for the Mexican market (ticket 214397_CadastroMexico) without a structural redesign. Language, local data protection requirements (closer to CCPA than LGPD), and brand context were the variables. The 16-state architecture remained intact.
                </p>
                <p>
                  Internationalization that requires no redesign is the operational definition of a scalable engine.
                </p>
              </TextBlock>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="Kenvue — the engine survived a corporate spin-off">
                <p>
                  In 2023, Johnson &amp; Johnson completed the largest spin-off in its history, separating consumer brands (Listerine, Neutrogena, Band-Aid) into a new entity: <strong className="font-normal text-[#1f1f1f]">Kenvue</strong>. The first Kenvue project in the archive (234944_Kenvue_SaudeTodoDia) continues the same work under the new corporate identity.
                </p>
                <p>
                  A fragile system doesn't survive a rebrand. The engine did — because it was built with enough brand independence to outlast the corporate structure that commissioned it.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Kenvue_SaudeTodoDia — engine continuity after corporate rebrand (2023)" aspect="aspect-[4/3]" />
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* ── Key Capabilities ──────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[120px]">
        <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
          {[
            {
              title: "Experience Architecture",
              body: "Designed a 16-state authentication system reusable across 9 brands, with full coverage of error, loading, and alternative user states — not just the happy path.",
            },
            {
              title: "Compliance by Design",
              body: "Transformed LGPD obligations into UX features: progressive consent, granular cookie control, and audit-ready timestamp capture — without creating friction that would hurt conversion.",
            },
            {
              title: "Systems Thinking at Scale",
              body: "Built a parametrization model that separated the engine core (invariable logic) from brand variables (visual identity, copy, legal text) — enabling ~80% cost reduction per new brand launch.",
            },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1} className="flex flex-col gap-4">
              <p className="text-[18px] font-normal text-[#1f1f1f] md:text-[20px]">{item.title}</p>
              <p className="text-[15px] font-light leading-relaxed text-[#5a5a5a] md:text-[16px]">{item.body}</p>
            </FadeUp>
          ))}
        </div>
      </ContentContainer>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <ContentContainer className="pb-16 pt-8 md:pb-[120px] md:pt-16">
        <FadeUp>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-[36px] font-light text-[#1f1f1f] md:text-[56px]">Thanks for reading.</h2>
            <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#5a5a5a]">
              This project represents five years of iterative thinking — from campaign-by-campaign execution to a unified platform that outlasted the company that commissioned it. Reach out if you'd like to go deeper.
            </p>
          </div>
        </FadeUp>
      </ContentContainer>

    </main>
  );
}
