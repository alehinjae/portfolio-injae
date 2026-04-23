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

const overview = [
  { title: "My Role", items: ["UX/UI Designer"] },
  { title: "Tools", items: ["FigJam", "Figma"] },
  {
    title: "Team",
    items: [
      "1 UX/UI Designer",
      "1 UX Writing",
      "1 Frontend Developer",
      "1 Backend Developer",
      "1 Project Manager",
    ],
  },
  { title: "Timeline", items: ["Overall: 6+ Weeks", "Design: 2+ Weeks"] },
];

const processSteps = [
  "Discovery",
  "Journey",
  "User flow",
  "Wireframes",
  "Layout",
  "Delivery",
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

export function MaternityPage() {
  return (
    <PasswordGate>
      <main className="bg-[#f8f8f8] font-light text-[#1f1f1f]">

        {/* Hero */}
        <section className="relative min-h-[540px] overflow-hidden">
          <img src={maternityCover} alt="" className="absolute inset-0 h-full w-full scale-[1.03] object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <ContentContainer className="relative flex min-h-[540px] items-end pb-16 pt-24 md:pb-20">
            <div className="max-w-[860px] text-white">
              <p className="text-[14px] font-light uppercase tracking-[0.28em] text-white/70">Johnson's Baby</p>
              <h1 className="mt-6 text-[54px] font-light leading-[1.02] md:text-[92px]">Maternity Campaign</h1>
              <p className="mt-8 max-w-[760px] text-[20px] font-light leading-[32px] text-white/86 md:text-[24px] md:leading-[38px]">
                Johnson's Baby maternity campaign supports baby care, offering tips, discounts, and products upon registration.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Campaign visuals */}
        <div className="grid md:grid-cols-2">
          <img src={imgHero} alt="Maternity campaign visual" className="w-full object-cover" />
          <img src={imgHeroSecondary} alt="Johnson's Baby campaign screens" className="w-full object-cover" />
        </div>

        {/* Intro */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className="text-[30px] font-light leading-[1.25] text-[#1f1f1f] md:text-[38px]">
                Maternity Care — Johnson's Baby Hotsite Marketing Strategy
              </h2>
            </div>
            <div className="flex flex-col gap-7 text-[18px] font-light leading-[31px] text-[#1f1f1f] md:text-[20px] md:leading-[34px]">
              <p>
                The project entailed creating an enduring Johnson's maternity campaign,{" "}
                <strong>along with refreshing registration for mothers to access maternity tips and product discounts.</strong>
              </p>
              <p>
                The project also involved developing a{" "}
                <strong>new mechanism to centralize user data in a single customer database</strong>, enabling the
                user to participate in other Johnson's campaigns with the same data in the future.
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

        {/* Challenge & Goals */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <TextCard title="Challenge">
              <p>
                The main challenge was creating an engagement flow to prompt baby data from users.{" "}
                <strong>Tracking maternity source and post-thank-you page.</strong> Further goals included offering
                business opportunities, experiences, and content,{" "}
                <strong>like showcasing baby products or linking to partner shopping sites.</strong>
              </p>
            </TextCard>
            <TextCard title="Goals">
              <p>
                Develop a streamlined registration framework to build a base of qualified and engaged leads through
                a maternity program spanning baby to child growth phases. Ultimately, we'll{" "}
                <strong>incentivize data exchange with discounts and baby care tips.</strong>
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Kickoff */}
        <ContentContainer className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
            <CaseImage src={imgKickoff} alt="Kickoff with team" />
            <TextCard title="Kickoff with team">
              <p>
                We discussed how the maternity campaign would work. It would involve validating the codes that
                mothers would receive in kits provided at maternity wards. Subsequently, they would register,
                inputting information about their babies as an{" "}
                <strong>exchange for receiving tips, products, and discounts from Johnson's for baby care.</strong>
              </p>
              <p>
                Creating a streamlined and efficient registration process was crucial to ensure that the baby's
                mother could ultimately benefit. Following a suggestion and a client request, we could schedule a
                future meeting{" "}
                <strong>to discuss the campaign journey from a user's perspective.</strong>
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Process */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
              <div className="flex flex-col gap-6">
                <SectionHeading title="My design process for this project" />
                <p className="text-[18px] font-light leading-[31px] text-[#1f1f1f]">
                  Each project goes through separate stages to meet deadlines and ensure quality in user experience
                  and business strategy.
                </p>
              </div>
              <CaseImage src={imgProcessDiagram} alt="Design process diagram" />
            </div>
            <ProcessTimeline />
          </div>
        </ContentContainer>

        {/* 1. Discovery */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="01" title="Discovery" />
            <TextCard title="1. Discovery">
              <p>
                After the kickoff, we proceeded with analyzing the provided data. We compiled certain definitions
                and also gathered information to establish our proto persona, which would assist us in guiding our
                decisions at the project's outset, particularly in envisioning the journey.
              </p>
            </TextCard>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgFlyer} alt="Maternity kit flyer" caption="Flyer for illustrative purposes*" />
              <TextCard title="Maternity Kit">
                <p>
                  At Johnson's Baby partner maternity clinics, mothers receive a kit with products and a bag, along
                  with a flyer containing a discount code. Upon registration, they gain access to tips and
                  supplementary products for baby care.
                </p>
                <p>
                  Although the discount code from the flyer is immediately usable, Johnson's requires code
                  verification in the maternity campaign to gather further information about the associated maternity
                  clinic.
                </p>
              </TextCard>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <CaseImage src={imgActiveCampaign} alt="Active campaign analysis" />
              <CaseImage src={imgCampaignScreens} alt="Campaign screens" />
            </div>
            <TextCard title="Active campaign analyse">
              <p>
                From the previous ongoing campaign, since it was evergreen, we conducted analyses and took notes on
                the mandatory information required for registration. This process helped us generate insights based
                on existing practices.
              </p>
            </TextCard>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <CaseImage src={imgDataDoc} alt="Data accessibility documentation" />
              <TextCard title="Data Accessibility Challenges">
                <p>
                  Johnson's Baby encountered internal and legal processes that posed challenges to accessing precise
                  data regarding the target audience. Given these challenges and the scenarios shared by the client,
                  we opted to define a proto persona. This strategic decision enables us to channel our efforts more
                  effectively, ensuring higher quality progress in the project.
                </p>
              </TextCard>
            </div>
            <CaseImage src={imgPersona} alt="Proto persona definition" />
            <div className="grid gap-6 md:grid-cols-2">
              <TextCard title="1. Highlighted Benefits">
                <p>
                  Enhance communication of campaign perks like tips, products, and discounts. Explore communication
                  channels beyond email, considering potential downsides of email-based promotions.
                </p>
              </TextCard>
              <TextCard title="2. Relevant Content">
                <p>
                  Provide Mara with essential baby care information swiftly and straightforwardly. Simplify access
                  to relevant content to aid her journey as a mother.
                </p>
              </TextCard>
              <TextCard title="3. Simplified Steps">
                <p>
                  Design an optimized registration flow, considering Mara's busy schedule. Streamline steps to
                  swiftly register necessary information and reap campaign benefits.
                </p>
              </TextCard>
              <TextCard title="4. Personalization">
                <p>
                  Formulate personalized engagement strategies for Mara, presenting tailored suggestions and
                  information aligned with her needs. This could encompass personalized product recommendations,
                  custom tips, and targeted interactions.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 2. Journey */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="02" title="Journey" />
            <TextCard title="2. Journey">
              <p>
                With the core guidelines in place to shape our project's direction, our next step involves crafting
                the journey as previously agreed upon with the client. This entails a discussion and presentation of
                the path these individuals will navigate upon landing in the campaign.
              </p>
            </TextCard>
            <CaseImage src={imgJourneyMap} alt="User journey map" />
            <div className="grid gap-6 md:grid-cols-2">
              <TextCard title="1. Engagement">
                <p>
                  Upon presenting the journey to the client, they highlighted the need to underscore the benefits
                  exchange that individuals would receive upon registering in Johnson's database. It's important to
                  note that these individuals could also participate in other campaigns using the same data.
                </p>
              </TextCard>
              <TextCard title="2. Register">
                <p>
                  With the reviewed and client-approved journey in place, we suggested proceeding to construct the
                  User Flow. This step ensures a more in-depth detailing of all the stages the user will encounter.
                </p>
              </TextCard>
              <TextCard title="3. Benefits">
                <p>
                  Within the journey, it was essential to make the benefits clear to the user upon registering their
                  information, as there needed to be an exchange, and the user had to feel rewarded.
                </p>
              </TextCard>
              <TextCard title="4. Login">
                <p>
                  The client also gained clarity on the stage where the user would have the opportunity for a new
                  logged-in area in this campaign and in future opportunities, given that we will be integrating data
                  with other campaigns.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 3. User flow */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="03" title="User flow" />
            <TextCard title="3. User flow">
              <p>
                Following the comprehension of the journey, in collaboration with the client and the technology
                team, we put forth a proposed journey that distinctly outlined every instance where the user would
                encounter a path relevant to their needs.
              </p>
            </TextCard>
            <CaseImage src={imgUserFlow} alt="User flow diagram" />
            <div className="grid gap-6 md:grid-cols-3">
              <TextCard title="01">
                <p>
                  From the user flow, we discussed making it clear in the content that the user would be registering
                  their data first for future Johnson's campaigns, and subsequently inputting their child's
                  information.
                </p>
              </TextCard>
              <TextCard title="02">
                <p>
                  Upon presenting the paths the user would take within the campaign, it became evident to the client
                  at what point they would proceed to log in after registering their information.
                </p>
              </TextCard>
              <TextCard title="03">
                <p>
                  We also discussed future possibilities within the logged-in area while presenting the user flow,
                  as it was feasible to identify the types of opportunities we could explore within the logged-in
                  section.
                </p>
              </TextCard>
            </div>
          </div>
        </ContentContainer>

        {/* 4. Wireframes */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="04" title="Wireframes" />
            <TextCard title="4. Wireframes">
              <p>
                Perfect, now with the paths more defined and an understanding of the business strategy within the
                campaign — how it would work for both users and data collection in a new integration for future
                Johnson's campaigns — we commenced the construction of our wireframes.
              </p>
            </TextCard>
            <div className="grid gap-4 md:grid-cols-3">
              <CaseImage src={imgWireframe1} alt="Wireframe — registration flow" />
              <CaseImage src={imgWireframe2} alt="Wireframe — participation flow" />
              <CaseImage src={imgWireframe3} alt="Wireframe — logged area" />
            </div>
          </div>
        </ContentContainer>

        {/* 5. Layout */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="05" title="Layout" />
            <TextCard title="5. Layout">
              <p>
                After the wireframe was approved in collaboration with the client and the technology team, I began to
                progress with the refinement of the layout. I started by creating a moodboard that included the
                visual identity guidelines of Johnson's Baby and defining the visual concepts of how the campaign
                would align with the Johnson's brand's proposition of caring for and supporting babies in partnership
                with mothers.
              </p>
            </TextCard>
            <CaseImage src={imgMoodboard} alt="Visual moodboard for Johnson's Baby campaign" caption="Moodboard — Johnson's Baby visual identity" />
            <CaseImage src={imgLayoutScreens} alt="Final layout screens" />
          </div>
        </ContentContainer>

        {/* 6. Delivery */}
        <ContentContainer className="py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="06" title="Delivery" />
            <TextCard title="Interactive Prototype">
              <p>
                The final prototype was delivered with all flows — registration, code validation, and the logged-in
                area — fully prototypable in Figma, enabling the technology team and client to navigate and validate
                every interaction before development began.
              </p>
            </TextCard>
          </div>
        </ContentContainer>

        {/* Learnings */}
        <ContentContainer className="py-16 md:py-24">
          <TextCard title="Learnings">
            <p>
              Indeed, this project has been incredible throughout the process. One of the key takeaways for me is the
              significance of comprehending the user journey and experience when entering information, as well as the
              gains they'll receive from it.
            </p>
          </TextCard>
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
