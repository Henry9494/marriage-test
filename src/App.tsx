import { ScaleProvider } from "./context/ScaleContext";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import GallerySection from "./components/sections/GallerySection";
import LocationSection from "./components/sections/LocationSection";
import AccountSection from "./components/sections/AccountSection";

export default function App() {
  return (
    <ScaleProvider>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
    </ScaleProvider>
  );
}
