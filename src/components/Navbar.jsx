import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";
import useScrollSpy from "./useScrollSpy";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

const sections = [
  { id: "home", key: "home" },
  { id: "who-we-are", key: "whoWeAre" },
  { id: "cm-vs-pm", key: "cmVsPm" },
  { id: "scope-of-work", key: "scopeOfWork" },
  { id: "our-projects", key: "ourProjects" },
  { id: "contact-us", key: "contactUs" },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
        >
          PM<span>infotech</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s.id);
                }}
              >
                {t.nav[s.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLang}>
            <FaGlobe />
            <span>{lang === "en" ? "AR" : "EN"}</span>
          </button>
          <button
            className="burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}