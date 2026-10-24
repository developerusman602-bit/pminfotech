import { useLang } from "../components/LanguageContext";
import { FaHardHat, FaLaptopCode } from "react-icons/fa";

export default function CmVsPm() {
  const { t, lang } = useLang(); // Added lang
  const isAr = lang === "ar"; // Changed this line

  // You can move this content to translations.js later if you want it fully translated
  const cmPoints = [
    "Focuses on physical construction processes",
    "Manages contractors and on-site safety",
    "Ensures quality of materials and workmanship",
    "Strict adherence to building codes and blueprints",
  ];

  const pmPoints = [
    "Focuses on overall project lifecycle",
    "Manages budget, scope, and timeline",
    "Coordinates cross-functional teams and stakeholders",
    "Aligns project outcomes with business goals",
  ];

  return (
    <section id="cm-vs-pm" className="section alt">
      <div className="section-content">
        <h2>{t.cmVsPm.title}</h2>
        <p className="description" style={{ marginBottom: "3rem" }}>
          Understanding the difference between Construction Management and Project Management is key to successful delivery.
        </p>

        <div className="comparison-wrapper">
          {/* CM Card */}
          <div className="compare-card cm-card">
            <div className="card-icon">
              <FaHardHat />
            </div>
            <h3>{isAr ? "الإدارة الإنشائية" : "Construction Management (CM)"}</h3>
            <ul className="compare-list">
              {cmPoints.map((point, i) => (
                <li key={i}>{isAr ? "نقطة إدارة إنشائية" : point}</li>
              ))}
            </ul>
          </div>

          {/* VS Badge */}
          <div className="vs-badge">VS</div>

          {/* PM Card */}
          <div className="compare-card pm-card">
            <div className="card-icon">
              <FaLaptopCode />
            </div>
            <h3>{isAr ? "إدارة المشاريع" : "Project Management (PM)"}</h3>
            <ul className="compare-list">
              {pmPoints.map((point, i) => (
                <li key={i}>{isAr ? "نقطة إدارة مشاريع" : point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}