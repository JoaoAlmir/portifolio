import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Home.css";
import Header from "../components/header/Header.jsx";
import Presentation from "../components/presentation/Presetation.jsx";
import Experience from "../components/experience/Experience.jsx";

export default function Home() {
  const [scrollCount, setScrollCount] = React.useState(0);
  const presentationRef = React.useRef(null);
  const experienceRef = React.useRef(null);

  // define o valor máximo permitido para o scrollCount
  const MAX_SCROLL = 1;

  React.useEffect(() => {
    const handleWheel = (event) => {
      setScrollCount((prev) => {
        let newValue = event.deltaY > 0 ? prev + 1 : Math.max(0, prev - 1);

        // impede que ultrapasse o máximo
        newValue = Math.min(newValue, MAX_SCROLL);

        console.log("Rolagem detectada:", newValue);

        // Scroll programático
        if (newValue === 1 && event.deltaY > 0) {
          experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (newValue === 0 && event.deltaY < 0) {
          presentationRef.current.scrollIntoView({ behavior: "smooth" });
        }

        return newValue;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header scrollCount={scrollCount} />

      <div ref={presentationRef}>
        <Presentation />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>
    </>
  );
}
