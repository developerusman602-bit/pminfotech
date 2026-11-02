import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useLang } from "../components/LanguageContext";
import { FaDownload, FaFilePdf } from "react-icons/fa";

// Worker path for v7
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import myPdf from "../assets/profile.pdf"; 

export default function PdfViewer() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(600); // Default width

  // Detect screen size to make the PDF responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // For mobile, make it fit the screen width (minus padding)
        setPageWidth(window.innerWidth - 60); 
      } else {
        // For desktop, keep a nice readable size
        setPageWidth(650); 
      }
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section id="company-profile" className="section">
      <div className="section-content">
        <h2>{isAr ? "ملف الشركة" : "Company Profile"}</h2>
        <p className="description" style={{ marginBottom: "2rem" }}>
          {isAr 
            ? "تصفح أو قم بتحميل ملفنا التعريفي للاطلاع على تفاصيل أعمالنا وخبراتنا." 
            : "Browse or download our company profile to explore our extensive experience and project details."}
        </p>

        <a href={myPdf} download="Promatechs-Profile.pdf" className="download-btn">
          <FaDownload /> {isAr ? "تحميل الملف (PDF)" : "Download Full PDF"}
        </a>

        <div className="pdf-container">
          <Document
            file={myPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="pdf-loading">
                <FaFilePdf className="loading-icon" />
                <p>{isAr ? "جاري تحميل الملف..." : "Loading PDF..."}</p>
              </div>
            }
          >
            <div className="pdf-pages-wrapper">
              {Array.from(new Array(numPages), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  className="pdf-page"
                  renderTextLayer={true}
                  width={pageWidth} // Apply the dynamic width here
                />
              ))}
            </div>
          </Document>
        </div>
      </div>
    </section>
  );
}