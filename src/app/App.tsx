import { HashRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { HeringPage } from "./pages/projects/HeringPage";
import { ListerinePage } from "./pages/projects/ListerinePage";
import { MaternityPage } from "./pages/projects/MaternityPage";
import imgFooter from "../imports/Frame1-1/9d7b0a8aa2d5c323e61cab2d188db4402bad66e0.png";

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen w-full flex-col bg-[#f8f8f8]">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/hering" element={<HeringPage />} />
            <Route path="/projects/listerine" element={<ListerinePage />} />
            <Route path="/projects/maternity" element={<MaternityPage />} />
          </Routes>
        </div>

        <footer className="pt-20 md:pt-[120px]">
          <div className="relative w-full overflow-hidden aspect-[1920/669]">
            <img alt="" src={imgFooter} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
