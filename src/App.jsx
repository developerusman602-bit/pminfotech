import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";
import CmVsPm from "./sections/CmVsPm";
import ScopeOfWork from "./sections/ScopeOfWork";
import OurProjects from "./sections/OurProjects";
import ContactUs from "./sections/ContactUs";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <CmVsPm />
        <ScopeOfWork />
        <OurProjects />
        <ContactUs />
      </main>
    </LanguageProvider>
  );
}