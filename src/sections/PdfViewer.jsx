import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useLang } from "../components/LanguageContext";
import { FaDownload, FaFilePdf } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import myPdf from "../assets/profile.pdf"; 

export default function PdfViewer() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  
  const [numPages, setNumPages] = useState(null);

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

        {/* Download Button */}
        <a href={myPdf} download="Promatechs-Profile.pdf" className="download-btn">
          <FaDownload /> {isAr ? "تحميل الملف (PDF)" : "Download Full PDF"}
        </a>

        {/* PDF Viewer Container */}
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
            {/* Render all pages vertically */}
            <div className="pdf-pages-wrapper">
              {Array.from(new Array(numPages), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  className="pdf-page"
                  renderTextLayer={true}
                  scale={1.2} // Adjusts size for readability
                />
              ))}
            </div>
          </Document>
        </div>
      </div>
    </section>
  );
}