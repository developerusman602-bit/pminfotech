import { useLang } from "../components/LanguageContext";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section hero">
      {/* Floating background shapes */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="section-content hero-content">
        <span className="hero-badge">Welcome to PMinfotech</span>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        
        <div className="hero-actions">
          <button className="cta-btn" onClick={() => scrollTo("who-we-are")}>
            {t.hero.cta} <FaArrowRight />
          </button>
          <button className="cta-btn secondary" onClick={() => scrollTo("our-projects")}>
            <FaPlay /> View Projects
          </button>
        </div>
      </div>
    </section>
  );
}