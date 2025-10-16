import "./Footer.css";
import pdf from "../../assets/Curriculum João Almir Web.pdf";

const Footer = () => {

    const abrirPDF = () => {
        window.open(pdf, "_blank");
    };

    <button >Abrir PDF</button>

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p className="section-title">SAY HELLO</p>
                    <a href="mailto:joaoalmircos@gmail.com">joaoalmircos@gmail.com</a>
                    <a href="https://t.me/joaoalmir" target="_blank" rel="noreferrer">t.me/joaoalmir</a>
                </div>
                <div className="footer-center">
                    <a onClick={abrirPDF}>My Resume</a>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/joaoalmir" target="_blank" >GH</a>
                    <a href="https://www.linkedin.com/in/joaoalmir/" target="_blank" >LN</a>
                </div>
            </div>
            <hr className="footer-line" />
            <p className="footer-bottom">João Almir 2025</p>
        </footer>
    );
};

export default Footer;
