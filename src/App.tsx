import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { ScaleProvider } from "./context/ScaleContext";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import GallerySection from "./components/sections/GallerySection";
import LocationSection from "./components/sections/LocationSection";
import AccountSection from "./components/sections/AccountSection";
import Loader from "./components/Loader";
import { SnackbarProvider } from "notistack";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={1500}
    >
      <ScaleProvider>
        <AnimatePresence>{loading && <Loader />}</AnimatePresence>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <AccountSection />
      </ScaleProvider>
    </SnackbarProvider>
  );
}
