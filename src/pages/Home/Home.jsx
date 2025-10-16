import React from "react";
import "./Home.css";
import Header from "../../components/header/Header.jsx";
import Presentation from "../../components/presentation/Presetation.jsx";
import Experience from "../../components/experience/Experience.jsx";
import Project from "../../components/project/project.jsx";
import { useNavigate } from "react-router-dom";
import Email from "../../components/Email/Email.jsx";

export default function Home() {
  const [scrollCount, setScrollCount] = React.useState(0);
  const presentationRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const isScrolling = React.useRef(false);

  const touchStartY = React.useRef(0);
  const touchEndY = React.useRef(0);

  const MAX_SCROLL = 3;

  const nav = useNavigate();

  

  const scrollToSection = (index) => {
    if (index === 0) {
      presentationRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 1) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 2) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 3) {
      emailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      if (isScrolling.current) return;
      isScrolling.current = true;

      setScrollCount((prev) => {
        let newValue = event.deltaY > 0 ? prev + 1 : prev - 1;
        newValue = Math.max(0, Math.min(newValue, MAX_SCROLL));

        scrollToSection(newValue);

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);

        return newValue;
      });
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY.current;

      if (isScrolling.current) return;
      isScrolling.current = true;

      setScrollCount((prev) => {
        let newValue = prev;

        if (diff > 50) newValue = prev + 1; // deslizou para cima → próxima seção
        if (diff < -50) newValue = prev - 1; // deslizou para baixo → seção anterior

        newValue = Math.max(0, Math.min(newValue, MAX_SCROLL));

        scrollToSection(newValue);

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);

        return newValue;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <Header scrollCount={scrollCount} setHome={() => { presentationRef.current.scrollIntoView({ behavior: "smooth" }); nav("/"); }} />

      <div ref={presentationRef}>
        <Presentation />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={projectsRef}>
        <Project />
      </div>

      <div ref={emailRef}>
        <Email />
      </div>
    </>
  );
}
