import { useLang } from "../components/LanguageContext";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function OurProjects() {
  const { t, lang } = useLang(); // Added lang
  const isAr = lang === "ar"; // Changed this line

  const projects = [
    {
      title: isAr ? "برج الأعمال المركزي" : "Central Business Tower",
      category: isAr ? "إدارة إنشائية" : "Construction Management",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: isAr ? "منصة التكنولوجيا المالية" : "FinTech Platform Launch",
      category: isAr ? "إدارة مشاريع تقنية" : "IT Project Management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: isAr ? "مجمع الواجهة البحرية" : "Waterfront Complex",
      category: isAr ? "إدارة إنشائية" : "Construction Management",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: isAr ? "تحديث البنية التحتية" : "Infrastructure Upgrade",
      category: isAr ? "إدارة مشاريع" : "Project Management",
      image: "https://images.unsplash.com/photo-1541888079-03a1d4d7be87?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="our-projects" className="section alt">
      <div className="section-content">
        <h2>{t.ourProjects.title}</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <button className="project-link-btn">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}