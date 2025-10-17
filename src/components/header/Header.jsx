import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "./Header.css";
import { useContext } from "react";
import Language from "../../context/Language.jsx";
import pdf from "../../assets/Curriculum.pdf";


const Header = ({ scrollCount, setScroll }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const { language, setLanguage } = useContext(Language);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const abrirPDF = () => {
      window.open(pdf, "_blank");
    };

  useEffect(() => {
    if (scrollCount === 4) {
      setTextColor("#c5ff6a");
    }
    else if (scrollCount > 0 && scrollCount != 2) {
      setTextColor("black");
    }
    else {
      setTextColor("white");
    }
  }, [scrollCount]);

  return (
    <header>
      <div className="header-leftSide">
        <div className="title-wrapper" onClick={() => { setScroll(0); setTextColor("white"); }}>
          <AnimatePresence mode="wait">
            {scrollCount > 0 ? (
              <motion.h1
                key="Al"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ color: textColor }}
              >
                Al
              </motion.h1>
            ) : (
              <motion.h1
                key="Almir"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ color: textColor }}
              >
                Almir
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="header-rightSide">
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose color={textColor} size={34} /> : <IoIosMenu color={textColor} size={34} />}
        </button>

          {menuOpen && (
            <div
              className="menu"
            >
              <a onClick={() => { setMenuOpen(false); setScroll(2); }}>{language === "en" ? "Projects" : "Projetos"}</a>
              <a onClick={() => { setMenuOpen(false); setScroll(4); }}>{language === "en" ? "Contact" : "Contato"}</a>
              <a onClick={abrirPDF}>{language === "en" ? "Curriculum" : "Currículo"}</a>
              <div className="lang-switch">
                <div
                  className={`lang-button ${language === "en" ? "active" : ""}`}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </div>
                <div
                  className={`lang-button ${language === "pt" ? "active" : ""}`}
                  onClick={() => setLanguage("pt")}
                >
                  PT
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
