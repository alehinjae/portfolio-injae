import { motion } from "framer-motion";
import { PasswordGate } from "../../components/design-system/PasswordGate";
import { ContentContainer } from "../../components/design-system/ContentContainer";
import type { ReactNode } from "react";

import maternityCover from "../../../imports/Frame1-1/a35fc250f16f6bab9eab0bf17339a9d216e594fb.png";
import imgHero from "../../../imports/maternity/0BoAXEhjhBybhv84.png";
import imgHeroSecondary from "../../../imports/maternity/JpGSiZJ03PYaUPQG.png";
import imgKickoff from "../../../imports/maternity/Pny0bnirM7AHt20S.png";
import imgProcessDiagram from "../../../imports/maternity/pdKEc8Da9h106JGU.png";
import imgFlyer from "../../../imports/maternity/h01DOh9adHWdmOqs.png";
import imgActiveCampaign from "../../../imports/maternity/8J5amxBFz2LYI3yY.png";
import imgCampaignScreens from "../../../imports/maternity/v2thu4GgJ7R8negW.png";
import imgDataDoc from "../../../imports/maternity/rwSbYL4RQofL3t7f.png";
import imgPersona from "../../../imports/maternity/3Eppr1JW4EXK0XZv.png";
import imgJourneyMap from "../../../imports/maternity/WD7DEFDQEHvShnE2.png";
import imgUserFlow from "../../../imports/maternity/nl55CgPwxvTlBfig.png";
import imgWireframe1 from "../../../imports/maternity/3joDFekczX3yuFoU.png";
import imgWireframe2 from "../../../imports/maternity/baaNCzYWqbfSJd9H.png";
import imgWireframe3 from "../../../imports/maternity/gz9gcDeqAf6RrqNA.png";
import imgMoodboard from "../../../imports/maternity/DU7naiOJ4voYVXTX.png";
import imgLayoutScreens from "../../../imports/maternity/du95oaM1eA9nH9Ap.png";

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

// ─── Data ────────────────────────────────────────────────────────────────────

const overview = [
  { title: "My Role", items: ["UX/UI Designer"] },
  { title: "Tools", items: ["FigJam", "Figma"] },
  { title: "Team", items: ["1 UX/UI Designer", "1 UX Writing", "1 Frontend Developer", "1 Backend Developer", "1 Project Manager"] },
  { title: "Timeline", items: ["Overall: 6+ Weeks", "Design: 2+ Weeks"] },
];

const processSteps = ["Discovery", "Journey", "User flow", "Wireframes", "Layout", "Delivery"];

// ─── Sub-components ──────────────────────────────────────────────────────────

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

// ─── Page ────────────────────────────────────────────────────────────────────

export function MaternityPage() {
  return (
    <PasswordGate>
      <main className="bg-white font-light text-[#1f1f1f]">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="flex h-[500px] flex-col justify-end bg-[#e8e8e8]">
          <ContentContainer className="pb-12 md:pb-16">
            <motion.p
              className="text-[13px] font-normal uppercase tracking-[0.1em] text-[#8b8b8b]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: ease, delay: 0.1 }}
            >
              Johnson's Baby
            </motion.p>
            <motion.h1
              className="mt-4 text-[40px] font-light leading-tight text-[#1f1f1f] md:text-[64px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease }}
            >
              Maternity Campaign
            </motion.h1>
            <motion.p
              className="mt-4 text-[18px] font-light text-[#5a5a5a] md:text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease, delay: 0.15 }}
            >
              Johnson's Baby maternity campaign supports baby care, offering tips, discounts, and products upon registration.
            </motion.p>
          </ContentContainer>
        </section>

        {/* ── Campaign visual 1 (first module) ─────────────────────────────── */}
        <ContentContainer className="pt-16 md:pt-[120px]">
          <FadeIn>
            <div className="overflow-hidden rounded-[16px]">
              <img src={imgHero} alt="Maternity campaign visual" className="w-full object-cover" />
            </div>
          </FadeIn>
        </ContentContainer>

        {/* ── Intro ─────────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <FadeUp>
              <h2 className="text-[28px] font-light leading-snug text-[#1f1f1f] md:text-[36px]">
                Maternity Care — Johnson's Baby Hotsite Marketing Strategy
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="flex flex-col gap-6 text-[16px] font-light leading-relaxed text-[#5a5a5a]">
              <p>
                The project entailed creating an enduring Johnson's maternity campaign,{" "}
                <strong className="font-normal text-[#1f1f1f]">
                  along with refreshing registration for mothers to access maternity tips and product discounts.
                </strong>
              </p>
              <p>
                The project also involved developing a{" "}
                <strong className="font-normal text-[#1f1f1f]">
                  new mechanism to centralize user data in a single customer database
                </strong>
                , enabling the user to participate in other Johnson's campaigns with the same data in the future.
              </p>
            </FadeUp>
          </div>
        </ContentContainer>

        {/* ── Campaign visual 2 (after intro) ──────────────────────────────── */}
        <ContentContainer className="pb-16 md:pb-[120px]">
          <FadeIn>
            <div className="overflow-hidden rounded-[16px]">
              <img src={imgHeroSecondary} alt="Johnson's Baby campaign screens" className="w-full object-cover" />
            </div>
          </FadeIn>
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

        {/* ── Challenge & Goals ─────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-6 md:grid-cols-2">
            <LightCard title="Challenge">
              <p>
                The main challenge was creating an engagement flow to prompt baby data from users.{" "}
                <strong className="font-normal text-[#1f1f1f]">Tracking maternity source and post-thank-you page.</strong>{" "}
                Further goals included offering business opportunities, experiences, and content,{" "}
                <strong className="font-normal text-[#1f1f1f]">
                  like showcasing baby products or linking to partner shopping sites.
                </strong>
              </p>
            </LightCard>
            <LightCard title="Goals">
              <p>
                Develop a streamlined registration framework to build a base of qualified and engaged leads through
                a maternity program spanning baby to child growth phases. Ultimately, we'll{" "}
                <strong className="font-normal text-[#1f1f1f]">incentivize data exchange with discounts and baby care tips.</strong>
              </p>
            </LightCard>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Kickoff ───────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
            <CaseImage src={imgKickoff} alt="Kickoff with team" aspect="aspect-[4/3]" />
            <TextBlock label="Kickoff with team">
              <p>
                We discussed how the maternity campaign would work. It would involve validating the codes that
                mothers would receive in kits provided at maternity wards. Subsequently, they would register,
                inputting information about their babies as an{" "}
                <strong className="font-normal text-[#1f1f1f]">
                  exchange for receiving tips, products, and discounts from Johnson's for baby care.
                </strong>
              </p>
              <p>
                Creating a streamlined and efficient registration process was crucial to ensure that the baby's
                mother could ultimately benefit. Following a suggestion and a client request, we could schedule a
                future meeting{" "}
                <strong className="font-normal text-[#1f1f1f]">
                  to discuss the campaign journey from a user's perspective.
                </strong>
              </p>
            </TextBlock>
          </div>
        </ContentContainer>

        {/* ── Process ───────────────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-14">
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[72px] md:items-start">
                <div className="flex flex-col gap-6">
                  <SectionHeading title="My design process" />
                  <FadeUp delay={0.1}>
                    <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                      Each project goes through separate stages to meet deadlines and ensure quality in user experience
                      and business strategy.
                    </p>
                  </FadeUp>
                </div>
                <CaseImage src={imgProcessDiagram} alt="Design process diagram" />
              </div>
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
        </section>

        {/* ── 01 Discovery ──────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="01" title="Discovery" />
            <TextBlock label="Research approach">
              <p>
                After the kickoff, we proceeded with analyzing the provided data. We compiled certain definitions
                and also gathered information to establish our proto persona, which would assist us in guiding our
                decisions at the project's outset, particularly in envisioning the journey.
              </p>
            </TextBlock>
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <CaseImage src={imgFlyer} alt="Maternity kit flyer" caption="Flyer for illustrative purposes*" aspect="aspect-[4/3]" />
              <TextBlock label="Maternity Kit">
                <p>
                  At Johnson's Baby partner maternity clinics, mothers receive a kit with products and a bag, along
                  with a flyer containing a discount code. Upon registration, they gain access to tips and
                  supplementary products for baby care.
                </p>
                <p>
                  Although the discount code from the flyer is immediately usable, Johnson's requires code
                  verification in the maternity campaign to gather further information about the associated maternity clinic.
                </p>
              </TextBlock>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <CaseImage src={imgActiveCampaign} alt="Active campaign analysis" />
              <CaseImage src={imgCampaignScreens} alt="Campaign screens" />
            </div>
            <TextBlock label="Active campaign analyse">
              <p>
                From the previous ongoing campaign, since it was evergreen, we conducted analyses and took notes on
                the mandatory information required for registration. This process helped us generate insights based
                on existing practices.
              </p>
            </TextBlock>
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[72px] md:items-start">
              <CaseImage src={imgDataDoc} alt="Data accessibility documentation" />
              <TextBlock label="Data Accessibility Challenges">
                <p>
                  Johnson's Baby encountered internal and legal processes that posed challenges to accessing precise
                  data regarding the target audience. Given these challenges and the scenarios shared by the client,
                  we opted to define a proto persona. This strategic decision enables us to channel our efforts more
                  effectively, ensuring higher quality progress in the project.
                </p>
              </TextBlock>
            </div>
            <CaseImage src={imgPersona} alt="Proto persona definition" />
            <div className="grid gap-6 md:grid-cols-2">
              <LightCard title="1. Highlighted Benefits">
                <p>
                  Enhance communication of campaign perks like tips, products, and discounts. Explore communication
                  channels beyond email, considering potential downsides of email-based promotions.
                </p>
              </LightCard>
              <LightCard title="2. Relevant Content">
                <p>
                  Provide Mara with essential baby care information swiftly and straightforwardly. Simplify access
                  to relevant content to aid her journey as a mother.
                </p>
              </LightCard>
              <LightCard title="3. Simplified Steps">
                <p>
                  Design an optimized registration flow, considering Mara's busy schedule. Streamline steps to
                  swiftly register necessary information and reap campaign benefits.
                </p>
              </LightCard>
              <LightCard title="4. Personalization">
                <p>
                  Formulate personalized engagement strategies for Mara, presenting tailored suggestions and
                  information aligned with her needs. This could encompass personalized product recommendations,
                  custom tips, and targeted interactions.
                </p>
              </LightCard>
            </div>
          </div>
        </ContentContainer>

        {/* ── 02 Journey ────────────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <SectionHeading eyebrow="02" title="Journey" />
              <TextBlock label="Mapping the path">
                <p>
                  With the core guidelines in place to shape our project's direction, our next step involves crafting
                  the journey as previously agreed upon with the client. This entails a discussion and presentation of
                  the path these individuals will navigate upon landing in the campaign.
                </p>
              </TextBlock>
              <CaseImage src={imgJourneyMap} alt="User journey map" />
              <div className="grid gap-6 md:grid-cols-2">
                <LightCard title="1. Engagement">
                  <p>
                    Upon presenting the journey to the client, they highlighted the need to underscore the benefits
                    exchange that individuals would receive upon registering in Johnson's database. It's important to
                    note that these individuals could also participate in other campaigns using the same data.
                  </p>
                </LightCard>
                <LightCard title="2. Register">
                  <p>
                    With the reviewed and client-approved journey in place, we suggested proceeding to construct the
                    User Flow. This step ensures a more in-depth detailing of all the stages the user will encounter.
                  </p>
                </LightCard>
                <LightCard title="3. Benefits">
                  <p>
                    Within the journey, it was essential to make the benefits clear to the user upon registering their
                    information, as there needed to be an exchange, and the user had to feel rewarded.
                  </p>
                </LightCard>
                <LightCard title="4. Login">
                  <p>
                    The client also gained clarity on the stage where the user would have the opportunity for a new
                    logged-in area in this campaign and in future opportunities, given that we will be integrating data
                    with other campaigns.
                  </p>
                </LightCard>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* ── 03 User flow ──────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="03" title="User flow" />
            <TextBlock label="Defining the flow">
              <p>
                Following the comprehension of the journey, in collaboration with the client and the technology
                team, we put forth a proposed journey that distinctly outlined every instance where the user would
                encounter a path relevant to their needs.
              </p>
            </TextBlock>
            <CaseImage src={imgUserFlow} alt="User flow diagram" />
            <div className="grid gap-8 md:grid-cols-3">
              <TextBlock label="01">
                <p>
                  From the user flow, we discussed making it clear in the content that the user would be registering
                  their data first for future Johnson's campaigns, and subsequently inputting their child's information.
                </p>
              </TextBlock>
              <TextBlock label="02">
                <p>
                  Upon presenting the paths the user would take within the campaign, it became evident to the client
                  at what point they would proceed to log in after registering their information.
                </p>
              </TextBlock>
              <TextBlock label="03">
                <p>
                  We also discussed future possibilities within the logged-in area while presenting the user flow,
                  as it was feasible to identify the types of opportunities we could explore within the logged-in section.
                </p>
              </TextBlock>
            </div>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── 04 Wireframes ─────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="04" title="Wireframes" />
            <TextBlock label="Structuring the screens">
              <p>
                Perfect, now with the paths more defined and an understanding of the business strategy within the
                campaign — how it would work for both users and data collection in a new integration for future
                Johnson's campaigns — we commenced the construction of our wireframes.
              </p>
            </TextBlock>
            <div className="grid gap-4 md:grid-cols-3">
              <CaseImage src={imgWireframe1} alt="Wireframe — registration flow" aspect="aspect-[3/4]" />
              <CaseImage src={imgWireframe2} alt="Wireframe — participation flow" aspect="aspect-[3/4]" />
              <CaseImage src={imgWireframe3} alt="Wireframe — logged area" aspect="aspect-[3/4]" />
            </div>
          </div>
        </ContentContainer>

        {/* ── 05 Layout ─────────────────────────────────────────────────────── */}
        <section className="w-full bg-[#f5f5f5]">
          <ContentContainer className="py-16 md:py-[120px]">
            <div className="flex flex-col gap-16">
              <SectionHeading eyebrow="05" title="Layout" />
              <TextBlock label="Visual direction">
                <p>
                  After the wireframe was approved in collaboration with the client and the technology team, I began to
                  progress with the refinement of the layout. I started by creating a moodboard that included the
                  visual identity guidelines of Johnson's Baby and defining the visual concepts of how the campaign
                  would align with the Johnson's brand's proposition of caring for and supporting babies in partnership
                  with mothers.
                </p>
              </TextBlock>
              <CaseImage src={imgMoodboard} alt="Visual moodboard for Johnson's Baby campaign" caption="Moodboard — Johnson's Baby visual identity" />
              <CaseImage src={imgLayoutScreens} alt="Final layout screens" />
            </div>
          </ContentContainer>
        </section>

        {/* ── 06 Delivery ───────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="flex flex-col gap-16">
            <SectionHeading eyebrow="06" title="Delivery" />
            <TextBlock label="Interactive Prototype">
              <p>
                The final prototype was delivered with all flows — registration, code validation, and the logged-in
                area — fully prototypable in Figma, enabling the technology team and client to navigate and validate
                every interaction before development began.
              </p>
            </TextBlock>
          </div>
        </ContentContainer>

        <Divider />

        {/* ── Learnings ─────────────────────────────────────────────────────── */}
        <ContentContainer className="py-16 md:py-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-[72px]">
            <SectionHeading title="Learnings" />
            <FadeUp delay={0.1}>
              <p className="text-[16px] font-light leading-relaxed text-[#5a5a5a]">
                Indeed, this project has been incredible throughout the process. One of the key takeaways for me is the
                significance of comprehending the user journey and experience when entering information, as well as the
                gains they'll receive from it.
              </p>
            </FadeUp>
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
