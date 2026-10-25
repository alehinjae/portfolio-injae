import { motion } from "framer-motion";
import { Link } from "react-router";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import { Scrollspy } from "../../components/design-system/Scrollspy";
import type { ReactNode } from "react";

import imgMaternity from "../../../imports/engine/maternity-home.webp";
import imgWireflow from "../../../imports/engine/wireflow-138951.webp";
import imgSignup from "../../../imports/engine/neutrogena-signup.webp";
import imgVerify from "../../../imports/engine/neutrogena-verify.webp";
import imgAccount from "../../../imports/engine/neutrogena-account.webp";
import imgBrandNeutrogena from "../../../imports/engine/brand-neutrogena.webp";
import imgBrandTylenol from "../../../imports/engine/brand-tylenol.webp";
import imgBrandNeostrata from "../../../imports/engine/brand-neostrata.webp";
import imgBrandListerine from "../../../imports/engine/brand-listerine.webp";
import imgSgPrinciples from "../../../imports/engine/sg-principles.webp";
import imgSgComponents from "../../../imports/engine/sg-components.webp";

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

const NAVY = "#0e2346";
const BLUE = "#2e8fdc";

const SCROLLSPY_ITEMS = [
  { id: "context", label: "Context" },
  { id: "insight", label: "Insight" },
  { id: "architecture", label: "Architecture" },
  { id: "states", label: "States" },
  { id: "brands", label: "Brands" },
  { id: "style-guide", label: "Style guide" },
  { id: "impact", label: "Impact" },
];

function SectionHeading({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <p className={`text-[12px] font-normal uppercase tracking-[0.1em] ${light ? "text-[#d6e8fa]" : "text-[#2e8fdc]"}`}>{eyebrow}</p>
        )}
        <h2 className={`text-[34px] font-light leading-tight md:text-[52px] ${light ? "text-white" : "text-[#14181f]"}`}>{title}</h2>
      </div>
    </FadeUp>
  );
}

function Lead({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <FadeUp>
      <p className={`max-w-[820px] text-[17px] font-light leading-relaxed ${light ? "text-[#d6e8fa]" : "text-[#5c626e]"}`}>{children}</p>
    </FadeUp>
  );
}

function CaseImage({ src, alt = "", caption, frame = "", light = false }: { src: string; alt?: string; caption?: string; frame?: string; light?: boolean }) {
  return (
    <FadeIn>
      <figure className="w-full">
        <div className={`overflow-hidden rounded-[16px] ${frame}`}>
          <img src={src} alt={alt} loading="lazy" className="w-full" />
        </div>
        {caption && <figcaption className={`mt-3 text-[13px] font-light ${light ? "text-[#d6e8fa]/80" : "text-[#8c929e]"}`}>{caption}</figcaption>}
      </figure>
    </FadeIn>
  );
}

const timeline = [
  ["2019–20", "Hotsites per campaign", "48h Poderosas, Pureza, Sundown, Hipoglós: a full journey, redesigned every time.", false],
  ["2021", "Maternity", "The first promise of a single sign-up for Johnson's campaigns.", false],
  ["Apr 2021", "Engine Express", "The Neutrogena scope already asks for the hotsite to be built on the existing engine.", false],
  ["2022", "New engine · 138951", "Wireframes and wireflow: one account, many campaigns.", true],
  ["2022", "Neutrogena · 188650", "The reference spec for the account anatomy.", true],
  ["2022–23", "4 more brands", "Listerine, Tylenol, Neostrata and Mexico: same grid, different brand.", true],
] as const;

const states = [
  ["00", "Sign-up", "Personal and account data, with login and user headers", false],
  ["01 A/B", "Verify your email", "Pending and “not confirmed yet”, with resend", true],
  ["02", "Email verified", "Confirmation and “Access account”", false],
  ["03 A/B", "Login", "Login, and login with confirmation resend", true],
  ["04–05", "Forgot password", "Two-step recovery", true],
  ["06–08", "My account", "Personal data and password change", false],
  ["10–11", "Editing the account", "Data editing with validation", false],
  ["12–16", "Email change", "A/B branches and notices to the old and new address", true],
  ["17", "Logged-in area", "Account with enrolled campaigns", false],
  ["—", "404 · toast · promo", "Error, feedback, and closed promotion vs. logged-in area", true],
] as const;

const brands = [
  { name: "Neutrogena", ticket: "188650", delivery: "HTML spec (v1–v3, ~57 screens) + 404 package", note: "Reference spec, with an internal style guide" },
  { name: "Listerine", ticket: "202188", delivery: "JPG layouts per artboard + style guide", note: "Screen codes match Neutrogena 1:1", to: "/projects/listerine" },
  { name: "Tylenol", ticket: "204318", delivery: "HTML spec with 57 screens", note: "Style guide numbered at the end of the spec (screens 54–57)" },
  { name: "Neostrata", ticket: "218177", delivery: "JPG layouts + separate editable file", note: "No B branch for verification; 404 on code 08" },
  { name: "Neutrogena Mexico", ticket: "214397", delivery: "JPG layouts (desktop, email, mobile)", note: "Revisited in 2023 to complete the logged-in area and 404" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function JJEnginePage() {
  return (
    <main className="bg-white font-light text-[#14181f]">
      <Scrollspy items={SCROLLSPY_ITEMS} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ backgroundColor: NAVY }}>
        <ContentContainer className="pt-16 md:pt-24">
          <div className="grid items-end gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-7 pb-14 md:pb-24">
              <motion.p
                className="text-[13px] font-normal uppercase tracking-[0.1em] text-white/60"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.1 }}
              >
                Johnson &amp; Johnson · Experience architecture · 2019–2023
              </motion.p>
              <motion.h1
                className="text-[38px] font-light leading-[1.12] text-white md:text-[54px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                One account, many brands: from disposable hotsites to a Johnson's sign-up engine
              </motion.h1>
              <motion.p
                className="text-[17px] font-light leading-relaxed text-[#d6e8fa] md:text-[19px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.15 }}
              >
                On the Johnson's account, every promotion redesigned login, sign-up and the logged-in area from scratch.
                Over four years, that work became a system: an account anatomy specified once and applied to Neutrogena,
                Listerine, Tylenol, Neostrata and Neutrogena Mexico.
              </motion.p>
              <motion.div
                className="grid grid-cols-3 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
              >
                {[["5", "brands on the same grid"], ["00–17", "screen codes, with A/B branches"], ["1", "account for N campaigns"]].map(([v, l]) => (
                  <div key={v} className="rounded-[14px] bg-white/[0.07] p-4">
                    <p className="text-[26px] font-light text-white">{v}</p>
                    <p className="mt-1 text-[13px] font-normal leading-snug text-[#d6e8fa]">{l}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-6 text-[14px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease, delay: 0.35 }}
              >
                {[["Role", "UX/UI · experience architecture · handoff specs"], ["Client", "Johnson & Johnson Consumer Health, via Mirum"], ["Period", "2019 → 2023"]].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[12px] font-normal text-[#d6e8fa]">{k}</p>
                    <p className="mt-1 font-light leading-snug text-white">{v}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="hidden grid-cols-2 items-end gap-5 md:grid"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
            >
              <div className="h-[600px] overflow-hidden rounded-t-[18px] shadow-2xl">
                <img src={imgBrandNeutrogena} alt="Neutrogena sign-up" className="w-full" />
              </div>
              <div className="h-[540px] overflow-hidden rounded-t-[18px] shadow-2xl">
                <img src={imgBrandListerine} alt="Listerine sign-up" className="w-full" />
              </div>
            </motion.div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 01 Context ────────────────────────────────────────────────────── */}
      <section id="context">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="01 · Context" title="Every promotion reinvented the account" />
            <Lead>
              Between 2019 and 2020, each campaign had its full journey designed from scratch: how to participate, sign-up,
              login, proof of purchase, logged-in area, forgot password, rules, 404 and emails. The same group asked for a
              different login on every hotsite, and every database was born and died with its promotion.
            </Lead>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Rework on every launch", "Dozens of account screens redesigned per brand and per campaign."],
                ["Data that doesn't connect", "One database per promotion rules out a single history and profile across brands."],
                ["Inconsistent trust", "For participants, the account didn't feel like a system, just a new form every time."],
              ].map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.06}>
                  <div className="h-full rounded-[16px] bg-[#f6f7f9] p-7">
                    <p className="text-[18px] font-normal text-[#14181f]">{t}</p>
                    <p className="mt-2 text-[14px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <p className="pt-4 text-[12px] font-normal uppercase tracking-[0.1em] text-[#8c929e]">The account's arc</p>
            <div className="grid gap-8 md:grid-cols-6 md:gap-4">
              {timeline.map(([y, t, d, hi], i) => (
                <FadeUp key={t} delay={i * 0.05} className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ backgroundColor: hi ? BLUE : NAVY }} />
                    <span className="h-[2px] w-full bg-[#e2e6ec]" />
                  </div>
                  <p className="text-[13px] font-normal" style={{ color: hi ? BLUE : NAVY }}>{y}</p>
                  <p className="text-[16px] font-normal leading-snug text-[#14181f]">{t}</p>
                  <p className="text-[13px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 02 Insight ────────────────────────────────────────────────────── */}
      <section id="insight" className="bg-[#f0f6fd]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-6">
                <SectionHeading eyebrow="02 · Insight" title="The campaign changes. The account doesn't." />
                <Lead>
                  The shift shows up first in the Maternity interface, in 2021: the form stops belonging to the promotion
                  and starts belonging to the brand. From then on, the work starts with the flow and the account model, and
                  only then with the campaign layout.
                </Lead>
              </div>
              <FadeUp>
                <blockquote className="rounded-[16px] border-l-4 bg-white p-8 md:p-10" style={{ borderColor: BLUE }}>
                  <p className="text-[22px] font-light leading-relaxed text-[#14181f] md:text-[24px]">
                    “This is the only time you'll fill in this information to take part in JOHNSON'S® campaigns.”
                  </p>
                  <footer className="mt-4 text-[13px] font-normal text-[#8c929e]">Sign-up form copy · Maternity campaign, 2021 (translated)</footer>
                </blockquote>
              </FadeUp>
            </div>
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr] md:items-start">
              <CaseImage src={imgMaternity} alt="Maternity campaign home" caption="Maternity: the home sells a single sign-up, tips and products, not just the promotion" frame="max-h-[640px]" />
              <CaseImage src={imgWireflow} alt="138951 logged-in area wireflow" caption="138951: wireflow of the logged-in area, with enrolled and open campaigns" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 03 Architecture ───────────────────────────────────────────────── */}
      <section id="architecture">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="03 · Architecture" title="What the Johnson's account holds" />
            <Lead>
              Before any screen, the model: whatever is shared by every campaign lives in the account; whatever belongs to a
              single promotion becomes a set of fields plugged into it.
            </Lead>
            <FadeUp>
              <div className="flex flex-col items-center">
                <div className="rounded-[14px] px-10 py-5 text-center" style={{ backgroundColor: NAVY }}>
                  <p className="text-[22px] font-normal text-white">Johnson's account</p>
                  <p className="mt-1 text-[13px] font-normal text-[#d6e8fa]">1 sign-up · verified email · single login</p>
                </div>
                <span className="h-8 w-[2px] bg-[#e2e6ec]" />
                <span className="hidden h-[2px] w-3/4 bg-[#e2e6ec] md:block" />
              </div>
            </FadeUp>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Personal & contact data", "Name, birth date, gender, phone, city; editable in the logged-in area."],
                ["Enrolled campaigns", "Products, receipts and lucky numbers for each promotion."],
                ["Open campaigns", "A shortcut to join live promotions with the same login."],
                ["Privacy (LGPD)", "Cookies, personalization and data-use notice as a block of the account."],
              ].map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.06}>
                  <div className="h-full rounded-[16px] bg-[#f0f6fd] p-6">
                    <p className="text-[17px] font-normal" style={{ color: NAVY }}>{t}</p>
                    <p className="mt-2 text-[14px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[14px] font-normal text-[#14181f]">Campaign fields, plugged into the account:</p>
                {["Hipoglós · PIX/bank refund", "Listerine · receipt and products", "Mothers & Children · children's data"].map((s) => (
                  <span key={s} className="rounded-full border px-4 py-2 text-[13px] font-normal" style={{ borderColor: BLUE, color: BLUE }}>{s}</span>
                ))}
              </div>
            </FadeUp>
            <p className="text-[12px] font-light text-[#8c929e]">Sources: logged-in area requirements document (Maternity, 2021) and the new engine wireframes (138951, 2022).</p>
          </div>
        </ContentContainer>
      </section>

      {/* ── 04 States ─────────────────────────────────────────────────────── */}
      <section id="states" className="bg-[#f6f7f9]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="04 · State anatomy" title="Design the bad states before the key visual" />
            <Lead>
              The Neutrogena spec (188650) became the reference: every account screen got a code, including the paths almost
              nobody designs. The same codes reappear in the other brands, which turns each new application into a reskin,
              not a new project.
            </Lead>
            <div className="flex flex-wrap gap-6 text-[13px] text-[#5c626e]">
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: NAVY }} />Main path</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BLUE }} />Exception or A/B branch</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {states.map(([code, t, d, ex], i) => (
                <FadeUp key={code + t} delay={(i % 5) * 0.04}>
                  <div className={`h-full rounded-[14px] bg-white p-5 ${ex ? "border-[1.5px]" : "border"}`} style={{ borderColor: ex ? BLUE : "#e2e6ec" }}>
                    <p className="text-[20px] font-light" style={{ color: ex ? BLUE : NAVY }}>{code}</p>
                    <p className="mt-1 text-[15px] font-normal leading-snug text-[#14181f]">{t}</p>
                    <p className="mt-1 text-[12px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-[0.8fr_1fr_1fr] md:items-start">
              <CaseImage src={imgSignup} alt="Neutrogena sign-up screen" caption="00 · Sign-up: data for “exclusive content and tips”, not just one promotion" frame="max-h-[720px]" />
              <CaseImage src={imgVerify} alt="Neutrogena verify email screen" caption="01 · Verify your email, with resend" />
              <CaseImage src={imgAccount} alt="Neutrogena my account screen" caption="17 · My account: data, contact and password" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 05 Decisions ──────────────────────────────────────────────────── */}
      <section>
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="05 · Decisions" title="Three decisions that turned screens into a system" />
            {[
              ["01", "A single account before the campaign's key visual", "Designing only the promotion ships faster now, but perpetuates rework and isolated databases on every launch.", "Maternity and the logged-in area document define the model in 2021; the 138951 engine formalizes navigation and a multi-campaign logged-in area in 2022."],
              ["02", "Fixed anatomy, variable brand", "Full freedom per brand feels more “custom”, but breaks parity across brands and complicates handoff. A rigid grid can feel limiting for branding.", "Identical 00–17 codes between Neutrogena and Listerine; Tylenol, Neostrata and Mexico follow the same numbering, with small documented differences."],
              ["03", "Compliance inside the flow", "Keeping rules and LGPD only in a PDF is legally safe and fragile as an experience.", "Consents (including international data transfer), policy and privacy preferences become steps and blocks of the account, not attachments."],
            ].map(([n, t, to, r]) => (
              <FadeUp key={n}>
                <div className="flex flex-col gap-4 rounded-[16px] bg-[#f6f7f9] p-8 md:flex-row md:gap-10">
                  <p className="text-[40px] font-light" style={{ color: BLUE }}>{n}</p>
                  <div>
                    <p className="text-[20px] font-normal text-[#14181f]">{t}</p>
                    <p className="mt-3 text-[14px] font-light leading-relaxed text-[#5c626e]">Trade-off: {to}</p>
                    <p className="mt-2 text-[14px] font-normal leading-relaxed text-[#14181f]">Result: {r}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </ContentContainer>
      </section>

      {/* ── 06 Brands ─────────────────────────────────────────────────────── */}
      <section id="brands" className="bg-[#f0f6fd]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="06 · Multi-brand application" title="The same sign-up screen, four brands" />
            <Lead>Structure, fields, order and states stay the same; the brand skin changes. Side by side, the reuse is obvious.</Lead>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                [imgBrandNeutrogena, "Neutrogena · 188650"],
                [imgBrandTylenol, "Tylenol · 204318"],
                [imgBrandNeostrata, "Neostrata · 218177"],
                [imgBrandListerine, "Listerine · 202188"],
              ].map(([src, cap], i) => (
                <FadeUp key={cap} delay={i * 0.06} className="flex flex-col gap-3">
                  <div className="h-[380px] overflow-hidden rounded-[16px] bg-white shadow-sm md:h-[480px]">
                    <img src={src} alt={cap} loading="lazy" className="w-full" />
                  </div>
                  <p className="text-[13px] font-normal text-[#5c626e]">{cap}</p>
                </FadeUp>
              ))}
            </div>
            <FadeUp>
              <div className="overflow-x-auto rounded-[16px] border border-[#e2e6ec] bg-white">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-[#f6f7f9] text-[11px] font-normal uppercase tracking-[0.08em] text-[#8c929e]">
                    <tr>
                      <th className="px-6 py-4 font-normal">Brand</th>
                      <th className="px-6 py-4 font-normal">Ticket</th>
                      <th className="px-6 py-4 font-normal">Delivery</th>
                      <th className="px-6 py-4 font-normal">Note</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] leading-relaxed">
                    {brands.map((b) => (
                      <tr key={b.name} className="border-t border-[#e2e6ec] align-top">
                        <td className="px-6 py-4 font-normal text-[#14181f]">
                          {b.to ? (
                            <Link to={b.to} className="underline-offset-4 hover:underline" style={{ color: BLUE }}>{b.name} →</Link>
                          ) : (
                            b.name
                          )}
                        </td>
                        <td className="px-6 py-4 font-light text-[#5c626e]">{b.ticket}</td>
                        <td className="px-6 py-4 font-light text-[#14181f]">{b.delivery}</td>
                        <td className="px-6 py-4 font-light text-[#14181f]">{b.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex flex-col gap-3 rounded-[16px] bg-white p-7 md:flex-row md:items-center md:justify-between">
                <p className="text-[16px] font-light text-[#14181f]">
                  The LISTERINE® 21 Day Challenge was built on top of this account: a new daily loop with reused sign-up.
                </p>
                <Link to="/projects/listerine" className="shrink-0 text-[15px] font-normal underline-offset-4 hover:underline" style={{ color: BLUE }}>
                  See the 21 Day Challenge case →
                </Link>
              </div>
            </FadeUp>
          </div>
        </ContentContainer>
      </section>

      {/* ── 07 Style guide ────────────────────────────────────────────────── */}
      <section id="style-guide" style={{ backgroundColor: NAVY }}>
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="07 · Style guide" title="The style guide travels inside the spec" light />
            <Lead light>
              The Johnson's guide (188651) was organized as a product proof of concept, not a brand manual: principles,
              elements, components and assets. It's numbered inside the Tylenol spec and shipped in the Listerine folder, so
              the brand application and the screens reach developers together.
            </Lead>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[["1", "Principles", "Typography, colors, spacing and grid"], ["2", "Elements", "Board 2 of the spec"], ["3", "Components", "Cards and logged-in area patterns"], ["4", "Assets", "Board 4 of the spec"]].map(([n, t, d]) => (
                <div key={n} className="rounded-[14px] border border-white/20 p-5">
                  <p className="text-[24px] font-light" style={{ color: BLUE }}>{n}</p>
                  <p className="mt-1 text-[17px] font-normal text-white">{t}</p>
                  <p className="mt-1 text-[13px] font-light text-[#d6e8fa]">{d}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <CaseImage light src={imgSgPrinciples} alt="Design principles board" caption="Design Principles · typography, colors, spacing and grid" />
              <CaseImage light src={imgSgComponents} alt="Components board" caption="Components · cards and logged-in area patterns" />
            </div>
            <Lead light>
              In parallel, a design system test (140564) applied two visual identities to the same home structure, to check
              whether the components held up when the brand changed.
            </Lead>
          </div>
        </ContentContainer>
      </section>

      {/* ── 08 Impact ─────────────────────────────────────────────────────── */}
      <section id="impact">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="08 · Impact" title="System scale, measured in the archive itself" />
            <Lead>
              There are no CRM metrics in the archive (sign-ups, account reuse, cost per launch). What can be backed up is
              the scale and consistency of the system that was delivered.
            </Lead>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[["5", "brand applications of the same grid, between 2022 and 2023"], ["00–17", "screen codes with A/B branches, identical across brands"], ["57", "numbered screens in the Tylenol HTML spec (about 57 in Neutrogena v1)"], ["1,200", "files in the Neutrogena folder, the largest on the account"]].map(([v, l]) => (
                <div key={v} className="rounded-[16px] bg-[#f0f6fd] p-6">
                  <p className="text-[34px] font-light" style={{ color: NAVY }}>{v}</p>
                  <p className="mt-2 text-[14px] font-light leading-relaxed text-[#5c626e]">{l}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["A method that became the standard", "Flow → wireframe → layout → tech: from Maternity on (323 artboards in a single Sketch file), the order of the delivery folders becomes how the account works."],
                ["Continuity", "The grid kept being revisited in 2023 (Mexico), and the flow work continued through the corporate brand transition."],
              ].map(([t, d]) => (
                <FadeUp key={t}>
                  <div className="h-full rounded-[16px] bg-[#f6f7f9] p-7">
                    <p className="text-[18px] font-normal text-[#14181f]">{t}</p>
                    <p className="mt-2 text-[14px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* ── 09 Reflection ─────────────────────────────────────────────────── */}
      <section className="bg-[#f6f7f9]">
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="09 · Reflection" title="What I'd take to the next one" />
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Tokens, not just boards", "The guide was visual, inside Sketch and the spec. Exporting tokens (color, type, spacing) would have made brand swaps automatic on the engineering side."],
                ["Measure the account", "How many people reused their sign-up in a second campaign, how many confirmed their email. Those numbers stayed with operations and would be the strongest proof of the system."],
                ["Document the components", "The design system test validated the reskin, but a usage inventory was missing, which would have reduced small differences between brands."],
                ["Keep the flow first", "What worked best: starting from the account model and the bad states, and only then the campaign layout."],
              ].map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.06}>
                  <div className="h-full rounded-[16px] bg-white p-7">
                    <p className="text-[18px] font-normal leading-snug text-[#14181f]">{t}</p>
                    <p className="mt-3 text-[14px] font-light leading-relaxed text-[#5c626e]">{d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp>
              <p className="max-w-[900px] text-[20px] font-light leading-relaxed" style={{ color: NAVY }}>
                In four years, the account stopped shipping disposable logins and started maintaining an experience engine:
                the same authentication grid serving different brands, without redesigning the system for every campaign.
              </p>
            </FadeUp>
          </div>
        </ContentContainer>
      </section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <ContentContainer className="py-16 md:py-[120px]">
        <FadeUp>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-[36px] font-light text-[#14181f] md:text-[56px]">Thanks for reading!</h2>
            <p className="mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-[#5c626e]">
              Maternity was where the single account first appeared in the interface.
            </p>
            <Link to="/projects/maternity">
              <button className="cursor-pointer rounded-full bg-[#14181f] px-6 py-3 text-[16px] font-normal text-white transition-opacity hover:opacity-80">
                Next project
              </button>
            </Link>
          </div>
        </FadeUp>
      </ContentContainer>
    </main>
  );
}
