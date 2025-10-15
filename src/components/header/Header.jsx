import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "./Header.css";

const Header = ({ scrollCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("white");

  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const updateTextColor = () => {
      if (!headerRef.current) return;

      // pega o elemento abaixo do header (assumindo que seja a primeira seção)
      const section = document.elementFromPoint(
        window.innerWidth / 2,
        headerRef.current.getBoundingClientRect().bottom + 5
      );

      if (!section) return;

      const bgColor = window.getComputedStyle(section).backgroundColor;
      const rgb = bgColor.match(/\d+/g)?.map(Number) || [0, 0, 0];
      const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

      setTextColor(luminance > 0.5 ? "black" : "white");
    };

    updateTextColor();
    window.addEventListener("scroll", updateTextColor);
    window.addEventListener("resize", updateTextColor);

    return () => {
      window.removeEventListener("scroll", updateTextColor);
      window.removeEventListener("resize", updateTextColor);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="header-leftSide">
        <div className="title-wrapper">
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
        {/* BOTÃO DO MENU */}
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose color={textColor} size={28} /> : <IoIosMenu color={textColor} size={28} />}
        </button>

        {/* MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="menu"
              initial={{ opacity: 0, x: -80, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
