import { HashRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { HeringPage } from "./pages/projects/HeringPage";
import { ListerinePage } from "./pages/projects/ListerinePage";
import { MaternityPage } from "./pages/projects/MaternityPage";
import { JJEnginePage } from "./pages/projects/JJEnginePage";
import { RappiMerchantsPage } from "./pages/projects/RappiMerchantsPage";
import { ScrollBar } from "./components/design-system/ScrollBar";
import { CursorGlow } from "./components/CursorGlow";
import imgFooter from "../imports/Frame1-1/9d7b0a8aa2d5c323e61cab2d188db4402bad66e0.png";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ willChange: "opacity" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/hering" element={<HeringPage />} />
          <Route path="/projects/listerine" element={<ListerinePage />} />
          <Route path="/projects/maternity" element={<MaternityPage />} />
          <Route path="/projects/jj-engine" element={<JJEnginePage />} />
          <Route path="/projects/rappi-merchants" element={<RappiMerchantsPage />} />
        </Routes>

        <footer className="pt-20 md:pt-[120px]">
          <div className="relative w-full overflow-hidden aspect-[1920/669]">
            <img alt="" src={imgFooter} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CursorGlow />
      <ScrollBar />
      <div className="flex min-h-screen w-full flex-col bg-[#f8f8f8]">
        <Header />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
      </div>
    </HashRouter>
  );
}
