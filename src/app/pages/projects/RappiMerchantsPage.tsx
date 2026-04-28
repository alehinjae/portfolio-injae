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

function Divider() {
  return (
    <div className="px-5 md:px-8">
      <div className="mx-auto max-w-[1188px] border-t border-[#e3e3e3]" />
    </div>
  );
}

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

function Quote({ children, author }: { children: ReactNode; author: string }) {
  return (
    <FadeIn>
      <div className="border-l-2 border-[#ff441f] pl-6">
        <p className="text-[18px] font-light italic leading-relaxed text-[#1f1f1f] md:text-[20px]">{children}</p>
        <p className="mt-3 text-[13px] font-normal uppercase tracking-[0.08em] text-[#b3b3b3]">{author}</p>
      </div>
    </FadeIn>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const overview = [
  { title: "My Role", items: ["Product Designer", "UX Research (co-facilitator)", "Design System contributor"] },
  { title: "Tools", items: ["Figma", "FigJam", "Mustache DS v8.0"] },
  { title: "Team", items: ["1 Lead Designer (me)", "1 Co-designer (Onboarding)", "2 PMs — Luciana Sleeper & Luciano Gaspar", "Engineering team"] },
  { title: "Platform", items: ["Web — partners.rappi.com", "B2B Portal, 9 LATAM countries", "2024"] },
];

const SCROLLSPY_ITEMS = [
  { id: "context", label: "The Platform" },
  { id: "discovery", label: "Research" },
  { id: "problem-definition", label: "Problem Definition" },
  { id: "solution", label: "Design Solution" },
  { id: "validation", label: "Usability Testing" },
  { id: "delivery", label: "Delivery" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function RappiMerchantsPage() {
  return (
    <main className="bg-white font-light text-[#1f1f1f]">
      <Scrollspy items={SCROLLSPY_ITEMS} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="flex h-[500px] flex-col justify-end bg-[#ff441f]">
        <ContentContainer className="pb-12 md:pb-16">
          <motion.p
            className="text-[13px] font-normal uppercase tracking-[0.1em] text-white/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            Rappi — Portal Merchants
          </motion.p>
          <motion.h1
            className="mt-4 text-[40px] font-light leading-tight text-white md:text-[64px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Menu &amp; Personalizations
          </motion.h1>
          <motion.p
            className="mt-4 text-[18px] font-light text-white/70 md:text-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            Redesigning the operational heart of a B2B platform serving hundreds of thousands of merchants across Latin America.
          </motion.p>
        </ContentContainer>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[120px]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
          <FadeUp>
            <h2 className="text-[28px] font-light leading-snug text-[#1f1f1f] md:text-[36px]">
              When the tool that runs your business is the hardest part of your day.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
            <p>
              The Rappi Merchants Portal is the operational backbone for every restaurant and retailer on the platform. Merchants use it daily to manage their catalog, set prices, configure options, and run their business — across 9 countries in Latin America.
            </p>
            <p>
              This project focused on the <strong className="font-normal text-[#1f1f1f]">Menu and Personalizations domain</strong> — one of the most critical and most broken parts of the portal. The system for creating product modifiers, option groups, and combos had become a source of consistent confusion, errors, and lost time for merchants.
            </p>
          </FadeUp>
        </div>
      </ContentContainer>

      {/* ── Metrics ───────────────────────────────────────────────────────── */}
      <ContentContainer className="pb-16 md:pb-[120px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "9", label: "Countries — LATAM" },
            { value: "100k+", label: "Active Merchants" },
            { value: "4", label: "Research Interviews" },
            { value: "v8.0", label: "Mustache Design System" },
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

      {/* ── Context ───────────────────────────────────────────────────────── */}
      <section id="context">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="01" title="The Platform" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="A unicorn's operational backbone">
                <p>
                  Rappi is Latin America's largest super-app — operating in Colombia, Mexico, Brazil, Argentina, Chile, Peru, Ecuador, Costa Rica, and Uruguay, valued at approximately US$5.25 billion. For every restaurant and retailer on the platform, <strong className="font-normal text-[#1f1f1f]">partners.rappi.com</strong> is where the business runs.
                </p>
                <p>
                  The portal covers onboarding, account management, financial reporting, tax certificates, menu operations, and AI-powered catalog tools — all built on the <strong className="font-normal text-[#1f1f1f]">Mustache Design System v8.0</strong>, Rappi's internal component library.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Portal Merchants — product ecosystem map across Mi Cuenta, Financiero, Menu, Personalizaciones" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <LightCard title="Menu Domain">
                <p>
                  The operational center of the portal. Merchants create products, manage categories, configure scheduling rules, and set up option groups and combos. Every order that flows through Rappi depends on this catalog being correct.
                </p>
              </LightCard>
              <LightCard title="Personalizations">
                <p>
                  The modifier system — "extras," option groups, combos, and sub-levels. A pizza restaurant configuring crust choices, size options, and drink pairings for hundreds of products operates here daily, under real operational pressure.
                </p>
              </LightCard>
              <LightCard title="My scope">
                <p>
                  I was the lead designer responsible for all 13 files in the Merchants ecosystem, from exploration to handoff — including discovery research, playground iterations, the design system layer, and the formal delivery ready for engineering.
                </p>
              </LightCard>
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* ── Discovery ─────────────────────────────────────────────────────── */}
      <section id="discovery" className="w-full bg-[#f5f5f5]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="02" title="Research &amp; Discovery" />

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <ImagePlaceholder label="FigJam — Discovery board: 4 merchant interviews with heuristic analysis and synthesis" aspect="aspect-[4/3]" />
              <TextBlock label="Four merchants. Four different businesses. The same frustrations.">
                <p>
                  Before touching the interface, I co-facilitated four structured usability interviews with active merchants — Rodrigo, João, Elizabeth, and Francisco — each running a different type of business on the platform.
                </p>
                <p>
                  Every session was documented in a structured FigJam board: merchant profile, task attempted, action taken, pain point observed, and the UX heuristic it violated. The goal was not just to find problems — it was to understand <strong className="font-normal text-[#1f1f1f]">why</strong> the same flows failed repeatedly across different users.
                </p>
              </TextBlock>
            </div>

            <FadeUp>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { heuristic: "Consistency & Standards", finding: "UI elements like 'Vincular Grupo' appeared in different positions across contexts. Merchants expected it where it used to be." },
                  { heuristic: "Recognition over Recall", finding: "The 'Personalizaciones' tab was systematically overlooked. Its label didn't match the mental model of how merchants thought about modifiers." },
                  { heuristic: "Visibility of System Status", finding: "After saving changes, confirmation was either too brief or absent. Merchants couldn't tell if their update had been applied." },
                ].map((item) => (
                  <div key={item.heuristic} className="flex flex-col gap-3 rounded-[16px] bg-white p-8">
                    <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#ff441f]">{item.heuristic}</p>
                    <p className="text-[15px] font-light leading-relaxed text-[#5a5a5a]">{item.finding}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="The interview board as a living artifact">
                <p>
                  The FigJam board wasn't a report. It was an active workspace — grouping insights by heuristic, mapping patterns across interviews, and identifying which pain points were isolated vs. systemic.
                </p>
                <p>
                  The synthesis revealed that confusion wasn't random. It clustered around two specific moments: <strong className="font-normal text-[#1f1f1f]">creating a new product with modifiers</strong> and <strong className="font-normal text-[#1f1f1f]">managing existing option groups</strong>. Everything else was faster to fix. These two flows needed to be rethought.
                </p>
              </TextBlock>
              <ImagePlaceholder label="FigJam synthesis — 4 merchants compared across heuristics, patterns highlighted" aspect="aspect-[4/3]" />
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* ── Problem Definition ────────────────────────────────────────────── */}
      <section id="problem-definition">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="03" title="Problem Definition" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="The architecture was working against the merchant">
                <p>
                  The Personalizations system had grown organically. Every new feature — combos, sub-levels, min/max rules, group reuse — was added to an existing structure not designed to hold them. The result was a UI that was technically complete but cognitively overwhelming.
                </p>
                <p>
                  Merchants managing 200+ products with dozens of modifier groups weren't failing because of inexperience. They were failing because <strong className="font-normal text-[#1f1f1f]">the interface demanded they remember things the system should be showing them</strong>.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Menu Playground — current state flow map, complexity audit" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DarkCard title="The modifier problem">
                <p>
                  Adding an option group to a product required navigating away from the product form — breaking context. Merchants lost their place, forgot what they were configuring, and either made errors or gave up.
                </p>
                <p>
                  The "Vincular Grupo" (Link Group) action was buried in a non-obvious location, with no clear affordance that it existed.
                </p>
              </DarkCard>
              <DarkCard title="The feedback problem">
                <p>
                  After saving, the toast notification disappeared before merchants had finished reading it. In a high-pressure operational environment — lunch service, order rush — a save that felt uncertain was a save that got repeated, creating duplicate configurations.
                </p>
              </DarkCard>
            </div>

            <FadeUp>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { pain: "Couldn't find the 'Add' button", severity: "High" },
                  { pain: "Confused by 'Personalizaciones' tab label", severity: "High" },
                  { pain: "Couldn't configure Min/Max for combos", severity: "High" },
                  { pain: "Couldn't reuse existing option groups", severity: "Medium" },
                ].map((item) => (
                  <div key={item.pain} className="flex flex-col gap-3 rounded-[16px] border border-[#e3e3e3] p-6">
                    <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-normal uppercase tracking-[0.08em] ${item.severity === "High" ? "bg-[#fff0ed] text-[#ff441f]" : "bg-[#f5f5f5] text-[#5a5a5a]"}`}>
                      {item.severity}
                    </span>
                    <p className="text-[14px] font-light leading-relaxed text-[#1f1f1f]">{item.pain}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </ContentContainer>
      </section>

      <Divider />

      {/* ── Solution ──────────────────────────────────────────────────────── */}
      <section id="solution" className="w-full bg-[#1f1f1f]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16 md:gap-[120px]">

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <div className="flex flex-col gap-8">
                <SectionHeading eyebrow="04" title="Design Solution" light />
                <FadeUp delay={0.1}>
                  <p className="text-[16px] font-light leading-relaxed text-white/60">
                    The redesign was built around one principle: <strong className="font-normal text-white">never take the merchant out of context</strong>. Every decision — structural, interaction, and feedback — was made to keep them oriented within their task, not managing navigation.
                  </p>
                </FadeUp>
              </div>
              <ImagePlaceholder label="Playground H2 — exploration: modal lateral concept vs. full-page navigation" aspect="aspect-[4/3]" />
            </div>

            {/* Modal lateral */}
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-center">
              <ImagePlaceholder label="Administrar Personalización Handoff — modal lateral for modifier configuration" aspect="aspect-[4/3]" />
              <TextBlock label="Modifier configuration via side modal" light>
                <p>
                  Instead of navigating away from the product form to configure modifiers, the new design loads the option group configuration in a <strong className="font-normal text-white">lateral modal</strong>. The product list remains visible in the background — the merchant never loses their place.
                </p>
                <p>
                  "Vincular Grupo" was repositioned inside the "Personalização" block — exactly where merchants looked for it, co-located with the output it controlled.
                </p>
              </TextBlock>
            </div>

            {/* Scheduling */}
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-center">
              <TextBlock label="Reactive category scheduling" light>
                <p>
                  A new scheduling system lets merchants set active hours per category. When a category is outside its defined window, it automatically shows as "Inactive" in the portal — with a clear visual state that mirrors what customers see in the app.
                </p>
                <p>
                  The sidebar was redesigned to be collapsible, giving the product grid more space during high-volume catalog editing sessions.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Menu Playground H2 — category scheduling system with reactive status states" aspect="aspect-[4/3]" />
            </div>

            {/* Groups and combos */}
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-center">
              <ImagePlaceholder label="Administrar Personalización Handoff — option groups with global Min/Max configuration and combo builder" aspect="aspect-[4/3]" />
              <TextBlock label="Groups, combos, and global min/max" light>
                <p>
                  Option group configuration was redesigned to support global min/max rules — set once, applied to every product using that group. The previous system required per-product configuration, causing inconsistencies across large catalogs.
                </p>
                <p>
                  The Combo builder gained a sub-level system and a <strong className="font-normal text-white">Duplicate button</strong> — cloning all properties except the SKU, which must remain unique for ERP integration. A detail that prevents a common merchant error.
                </p>
              </TextBlock>
            </div>

            {/* Bulk edit */}
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-center">
              <TextBlock label="Bulk edit — operational efficiency at scale" light>
                <p>
                  For merchants managing hundreds of items, the new Bulk Edit mode allows selecting multiple products and changing availability simultaneously. A common operational action — temporarily disabling items when ingredients run out — went from 10 clicks per item to a single action.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Menu Playground — bulk edit flow: multi-select and mass availability toggle" aspect="aspect-[4/3]" />
            </div>

            {/* Save feedback */}
            <FadeUp>
              <div className="grid gap-4 md:grid-cols-2 overflow-hidden rounded-[16px]">
                <div className="bg-[#2a2a2a] p-8 md:p-10">
                  <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-white/30">Before</p>
                  <p className="mt-4 text-[18px] font-normal text-white">External toast notification</p>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-white/50">
                    A toast appeared briefly in the corner and disappeared within seconds — before many merchants had finished processing the save action. Under service pressure, this created genuine uncertainty about whether changes had been applied.
                  </p>
                </div>
                <div className="bg-[#ff441f]/10 border border-[#ff441f]/30 p-8 md:p-10">
                  <p className="text-[12px] font-normal uppercase tracking-[0.1em] text-[#ff441f]/70">After</p>
                  <p className="mt-4 text-[18px] font-normal text-white">Inline button state feedback</p>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-white/50">
                    The save button itself shows "Saving…" during processing and resolves to a success state in-place. The feedback is anchored to the action — where the merchant's eye already is — eliminating the ambiguity of whether the save completed.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </ContentContainer>
      </section>

      {/* ── Validation ────────────────────────────────────────────────────── */}
      <section id="validation">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="05" title="Usability Testing" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="Testing the redesign with a real merchant">
                <p>
                  Before marking the design Ready for Dev, we ran a structured usability session with Paulo Molina — an active Rappi merchant who had never seen the new interface. The task: create a new product with modifiers from scratch.
                </p>
                <p>
                  The session confirmed the core hypothesis and surfaced one residual issue that went into the handoff as a flagged fix.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Usability test session — Paulo Molina testing new product creation flow" aspect="aspect-[4/3]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Quote author="Paulo Molina — Merchant usability test">
                "No geral, achei muito mais rápido. Menos cliques para chegar no mesmo lugar."
              </Quote>
              <Quote author="Paulo Molina — on the 'Vincular Grupo' repositioning">
                "Ah, agora que você falou... eu estava procurando o botão de 'Vincular Grupo' que ficava lá em cima. Agora ele está aqui embaixo, dentro de 'Personalização'."
              </Quote>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <ImagePlaceholder label="Test findings mapped to design decisions — confirmed and flagged issues" aspect="aspect-[4/3]" />
              <div className="flex flex-col gap-8">
                <TextBlock label="What was confirmed">
                  <p>
                    The core flow — product creation with modifier groups — was completed successfully. Paulo navigated to Menu → Products, used "Adicionar Novo," found the Personalização block, configured Min/Max for a group, and saved. The redesigned grouping worked as intended.
                  </p>
                </TextBlock>
                <TextBlock label="What was flagged for fix">
                  <p>
                    Paulo noted that the toast confirmation "sumiu rápido" (disappeared too fast) — matching the exact heuristic failure identified in discovery. This was documented in the handoff as a timing fix for engineering: extend toast duration or transition to the inline button state fully.
                  </p>
                </TextBlock>
              </div>
            </div>

          </div>
        </ContentContainer>
      </section>

      <Divider />

      {/* ── Delivery ──────────────────────────────────────────────────────── */}
      <section id="delivery">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="06" title="Delivery" />

            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
              <TextBlock label="From exploration to ready for dev">
                <p>
                  The delivery followed a structured progression across three Figma files: the Discovery FigJam (research and synthesis), the Playground (exploration and benchmark), and the Handoff (formal specification). Engineering received screens, user flows, component mappings to the Mustache Design System, and annotated edge cases.
                </p>
                <p>
                  The Merchants Library — the product-level design system layer that sits above the global Mustache DS — was updated with new patterns from the Personalizations redesign for reuse in future merchant-facing features.
                </p>
              </TextBlock>
              <ImagePlaceholder label="Administrar Personalización Handoff — full screen map, READY FOR DEV status" aspect="aspect-[4/3]" />
            </div>

            <FadeUp>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Discovery", detail: "4 merchant interviews · FigJam synthesis board · Heuristic analysis · Current state flow map" },
                  { label: "Playground H2", detail: "Benchmark · Exploration of modal vs. page navigation · Scheduling system · AI menu upload · ReWork iterations" },
                  { label: "Handoff", detail: "User flows v1–v3 · Full screen specs · Component annotations · Edge cases · READY FOR DEV" },
                ].map((item, i) => (
                  <div key={item.label} className="flex flex-col gap-3 border-t-2 border-[#1f1f1f] pt-4">
                    <span className="text-[11px] font-normal uppercase tracking-[0.1em] text-[#b3b3b3]">0{i + 1}</span>
                    <span className="text-[18px] font-normal text-[#1f1f1f]">{item.label}</span>
                    <span className="text-[14px] font-light leading-relaxed text-[#5a5a5a]">{item.detail}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <Divider />

            <div className="grid gap-10 md:grid-cols-3 md:gap-[72px]">
              {[
                {
                  title: "Operational speed",
                  body: "Merchants completed the product-plus-modifiers creation flow in fewer clicks. The lateral modal eliminated a full page transition that previously broke task context.",
                },
                {
                  title: "Systemic accuracy",
                  body: "Global min/max configuration for option groups eliminated per-product inconsistency across large catalogs. One rule, applied everywhere — reducing manual errors for merchants managing hundreds of items.",
                },
                {
                  title: "Research-to-delivery loop",
                  body: "Every design decision in the handoff traces back to a specific finding from the discovery interviews. The FigJam board, the Playground, and the final Handoff form a continuous, auditable chain of reasoning.",
                },
              ].map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.1} className="flex flex-col gap-4">
                  <p className="text-[18px] font-normal text-[#1f1f1f] md:text-[20px]">{item.title}</p>
                  <p className="text-[15px] font-light leading-relaxed text-[#5a5a5a] md:text-[16px]">{item.body}</p>
                </FadeUp>
              ))}
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <ContentContainer className="pb-16 pt-8 md:pb-[120px] md:pt-16">
        <FadeUp>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-[36px] font-light text-[#1f1f1f] md:text-[56px]">Thanks for reading.</h2>
            <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#5a5a5a]">
              Designing for merchants means designing for people under real operational pressure. Every second saved and every error prevented matters when your livelihood depends on the tool working correctly.
            </p>
          </div>
        </FadeUp>
      </ContentContainer>

    </main>
  );
}
