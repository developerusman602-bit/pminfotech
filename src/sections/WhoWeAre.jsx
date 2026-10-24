import { useLang } from "../components/LanguageContext";
import { FaCheckCircle } from "react-icons/fa";

export default function WhoWeAre() {
  const { t } = useLang();
  
  return (
    <section id="who-we-are" className="section">
      <div className="section-content split-layout">
        
        {/* Left Side: Text */}
        <div className="text-side">
          <h2>{t.whoWeAre.title}</h2>
          <p className="description">
            We are a dedicated team of project management professionals bridging the gap between construction management and IT solutions. 
            Our approach ensures your projects are delivered on time, within budget, and to the highest quality standards.
          </p>
          
          <ul className="feature-list">
            <li><FaCheckCircle className="check-icon" /> Strategic Planning</li>
            <li><FaCheckCircle className="check-icon" /> Risk Management</li>
            <li><FaCheckCircle className="check-icon" /> Agile Methodologies</li>
          </ul>
        </div>

        {/* Right Side: Visual */}
        <div className="visual-side">
          <div className="glass-card">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}