import svgPaths from "./svg-67h5vg466f";
import imgImg from "./17484fa76e68e016ea4f9cb7bf74dd4e285d830f.png";
import imgImg1 from "./4856bf47df4169cdcafa182864346bc9a5a04584.png";
import imgImg2 from "./a35fc250f16f6bab9eab0bf17339a9d216e594fb.png";
import imgImg3 from "./9d7b0a8aa2d5c323e61cab2d188db4402bad66e0.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[56px] text-black w-full">
        <p className="leading-[normal]">Product Designer</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[16.6px] text-black w-full">
        <p className="leading-[30px] mb-0">Located in Brazil with 6+ years of experience crafting visually compelling, data-informed experiences,</p>
        <p className="leading-[30px]">strategic design and conversion-focused solutions for B2B, E-commerce and digital products.</p>
      </div>
    </div>
  );
}

function Textbox() {
  return (
    <div className="content-stretch flex flex-col gap-[18.8px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Textbox">
      <Heading />
      <Container />
    </div>
  );
}

function HeadContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1188px] pt-[120px] relative shrink-0 w-full" data-name="head-container">
      <Textbox />
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8b8b8b] text-[16.7px] w-full">
        <p className="font-['Outfit:Regular',sans-serif]">
          <span className="leading-[30px]">{`Currently Product Designer at `}</span>
          <span className="leading-[30px] text-black">Thoughtworks</span>
        </p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[594px] relative rounded-[24px] shrink-0 w-full" data-name="img">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-full left-[-0.45%] max-w-none top-0 w-[100.91%]" src={imgImg} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[33.6px] text-black w-full">
        <p className="leading-[41px]">Hering Product Page</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[16.5px] text-black w-full">
        <p className="leading-[25px]">{`Visual & A/B Test Analytics`}</p>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[32px] relative shrink-0 w-full" data-name="txt">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="card">
      <Img />
      <Txt />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[594px] relative rounded-[24px] shrink-0 w-full" data-name="img">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-full left-[-0.45%] max-w-none top-0 w-[100.91%]" src={imgImg1} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[33.6px] text-black w-full">
        <p className="leading-[41px]">21 Day Challenge</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[16.5px] text-black w-full">
        <p className="leading-[25px]">LISTERINE® Campaign Lead Strategy</p>
      </div>
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[32px] relative shrink-0 w-full" data-name="txt">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="card">
      <Img1 />
      <Txt1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[594px] relative rounded-[24px] shrink-0 w-full" data-name="img">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-full left-[-0.45%] max-w-none top-0 w-[100.91%]" src={imgImg2} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[33.6px] text-black w-full">
        <p className="leading-[41px]">Maternity Care</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-light justify-center leading-[0] relative shrink-0 text-[16.5px] text-black w-full">
        <p className="leading-[25px]">{`Johnson's Baby Hotsite Marketing Strategy`}</p>
      </div>
    </div>
  );
}

function Txt2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[32px] relative shrink-0 w-full" data-name="txt">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="card">
      <Img2 />
      <Txt2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center max-w-[1188px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="footer">
      <div className="h-[669px] relative shrink-0 w-[1920px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[161.68%] left-0 max-w-none top-[-61.68%] w-full" src={imgImg3} />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-center justify-center left-0 top-[75px] w-[1920px]" data-name="content">
      <HeadContainer />
      <Container1 />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.671px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.6709 20">
        <g id="logo">
          <path d={svgPaths.p169dfc80} fill="var(--fill-0, #C0C0C0)" id="logo_2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
      <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16.6px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[1000px] shrink-0" data-name="button">
      <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16.6px] text-black whitespace-nowrap">
        <p className="leading-[normal]">About</p>
      </div>
    </div>
  );
}

function GroupButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="group-buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1188px] py-[16px] relative shrink-0 w-full" data-name="header">
      <Logo />
      <GroupButtons />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[1920px]" data-name="container">
      <Header />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f8f8f8] relative size-full">
      <Content />
      <Container8 />
    </div>
  );
}