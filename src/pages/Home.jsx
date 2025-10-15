import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Home.css";
import Header from "../components/header/Header.jsx";
import Presentation from "../components/presentation/Presetation.jsx";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1.",
    link: "https://github.com/seuusuario/projeto1",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    link: "https://github.com/seuusuario/projeto2",
  },
];

export default function Home() {
  const [scrollCount, setScrollCount] = React.useState(0);

  React.useEffect(() => {
    const handleWheel = (event) => {
      setScrollCount((prev) => {
        const newValue = event.deltaY > 0 ? prev + 1 : Math.max(0, prev - 1);
        console.log("Rolagem detectada:", newValue);
        return newValue;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);


  return (
    <>
    <Header scrollCount={scrollCount} />

    <Presentation />
    </>
  );
}
