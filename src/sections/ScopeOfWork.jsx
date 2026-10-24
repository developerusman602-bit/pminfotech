import { useLang } from "../components/LanguageContext";
import { FaClipboardList, FaChartLine, FaCogs, FaShieldAlt, FaUsers, FaLightbulb } from "react-icons/fa";

export default function ScopeOfWork() {
  const { t, lang } = useLang(); // Added lang
  const isAr = lang === "ar"; // Changed this line

  const services = [
    {
      icon: <FaClipboardList />,
      title: isAr ? "التخطيط الاستراتيجي" : "Strategic Planning",
      desc: isAr ? "وضع خطط واضحة وأهداف قابلة للتحقيق." : "Defining clear roadmaps and achievable milestones."
    },
    {
      icon: <FaChartLine />,
      title: isAr ? "مراقبة التكاليف" : "Cost Control",
      desc: isAr ? "إدارة الميزانية بدقة لتجنب التجاوزات." : "Precise budget management to prevent overruns."
    },
    {
      icon: <FaCogs />,
      title: isAr ? "إدارة التنفيذ" : "Execution Management",
      desc: isAr ? "الإشراف على العمليات اليومية وضمان الجودة." : "Overseeing daily operations and ensuring quality."
    },
    {
      icon: <FaShieldAlt />,
      title: isAr ? "إدارة المخاطر" : "Risk Management",
      desc: isAr ? "تحديد المخاطر المحتملة والتخفيف من آثارها." : "Identifying potential risks and mitigating impacts."
    },
    {
      icon: <FaUsers />,
      title: isAr ? "تنسيق الفرق" : "Team Coordination",
      desc: isAr ? "ربط أصحاب المصلحة والمقاولين بسلاسة." : "Seamlessly connecting stakeholders and contractors."
    },
    {
      icon: <FaLightbulb />,
      title: isAr ? "الابتكار" : "Innovation",
      desc: isAr ? "تطبيق أحدث التقنيات في إدارة المشاريع." : "Applying the latest tech in project management."
    }
  ];

  return (
    <section id="scope-of-work" className="section">
      <div className="section-content">
        <h2>{t.scopeOfWork.title}</h2>
        <p className="description" style={{ marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
          {isAr 
            ? "نقدم مجموعة شاملة من الخدمات لضمان نجاح مشروعك من البداية حتى التسليم." 
            : "We provide a comprehensive suite of services to ensure your project's success from inception to delivery."}
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}