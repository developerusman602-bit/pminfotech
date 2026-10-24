import { useState } from "react";
import { useLang } from "../components/LanguageContext"; // Make sure this path is correct
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactUs() {
  // 1. Pull 'lang' directly from Context
  const { t, lang } = useLang();
  
  // 2. Set isAr based on the state, NOT the HTML attribute
  const isAr = lang === "ar";
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ... (keep your handleSubmit and handleChange exactly as they are) ...

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, this is where we connect to the Python backend
    setIsSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-us" className="section">
      <div className="section-content">
        <div className="contact-wrapper">
          
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h2>{t.contactUs.title}</h2>
            <p className="description">
              {isAr 
                ? "هل لديك مشروع في ذهنك؟ تواصل معنا اليوم وسنقوم بتحويل رؤيتك إلى واقع."
                : "Have a project in mind? Let's discuss how we can bring your vision to life. Reach out to our team today."}
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>{isAr ? "موقعنا" : "Location"}</h4>
                  <p>Riyadh, Saudi Arabia</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>{isAr ? "الهاتف" : "Phone"}</h4>
                  <p>+966 12 345 6789</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                  <p>info@pminfotech.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="form-success">
                <FaCheckCircle className="success-icon" />
                <h3>{isAr ? "تم إرسال الرسالة!" : "Message Sent!"}</h3>
                <p>{isAr ? "شكراً لتواصلك معنا. سنرد عليك قريباً." : "Thank you for reaching out. We'll get back to you shortly."}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>{isAr ? "الاسم" : "Name"}</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder={isAr ? "أدخل اسمك" : "Your full name"} 
                  />
                </div>
                <div className="form-group">
                  <label>{isAr ? "البريد الإلكتروني" : "Email"}</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder={isAr ? "أدخل بريدك الإلكتروني" : "you@example.com"} 
                  />
                </div>
                <div className="form-group">
                  <label>{isAr ? "الرسالة" : "Message"}</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="4" 
                    placeholder={isAr ? "كيف يمكننا مساعدتك؟" : "Tell us about your project..."}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  {isAr ? "إرسال الرسالة" : "Send Message"} <FaPaperPlane />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}