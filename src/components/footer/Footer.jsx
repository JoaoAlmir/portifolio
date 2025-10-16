import "./Footer.css";
import pdf from "../../assets/Curriculum.pdf";
import Language from "../../context/Language.jsx";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(Language);

  const abrirPDF = () => {
    window.open(pdf, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="section-title">
            {language === "en" ? "SAY HELLO" : "DIGA OLÁ"}
          </p>
          <a href="mailto:joaoalmircos@gmail.com">joaoalmircos@gmail.com</a>
          <a href="https://t.me/joaoalmir" target="_blank" rel="noreferrer">
            t.me/joaoalmir
          </a>
        </div>

        <div className="footer-center">
          <a onClick={abrirPDF}>
            {language === "en" ? "My Resume" : "Meu Currículo"}
          </a>
        </div>

        <div className="footer-right">
          <a href="https://github.com/joaoalmir" target="_blank" rel="noreferrer">
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/joaoalmir/"
            target="_blank"
            rel="noreferrer"
          >
            LN
          </a>
        </div>
      </div>

      <hr className="footer-line" />
      <p className="footer-bottom">
        {language === "en" ? "João Almir 2025" : "João Almir 2025"}
      </p>
    </footer>
  );
};

export default Footer;
