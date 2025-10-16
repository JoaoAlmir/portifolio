import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ scrollCount, setScroll}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("white");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const nav = useNavigate();

  useEffect(() => {
    // muda a cor do texto de acordo com o scrollCount
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
        <div className="title-wrapper" onClick={() => {setScroll(0);setTextColor("white");}}>
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

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="menu"
              initial={{ opacity: 0, x: -200, y: 100 }}
              animate={{ opacity: 1, y: 25 }} 
              exit={{ opacity: 0, y: 50 }} 
              transition={{ duration: 0.3 }}
            >
              <a onClick={() => { setMenuOpen(false); setScroll(2); }}>Projects</a>
              <a onClick={() => { setMenuOpen(false); setScroll(4); }}>Contact</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
