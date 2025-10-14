import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Home.css";
import Header from "./../components/Header.jsx";

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
    <Header />
      {/* <animated.div className="home-container" >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQEQe04aUxhNlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721960668271?e=1763596800&v=beta&t=noyMvmPuWgZkZUthzh01hNkRgGyIa6f2AULYHK47WkU"
          alt="icon image"
          className="home-avatar"
        />
        <header className="home-header">
          <h1>João Almir</h1>
          <p>Desenvolvedor Front-end | React | Vue</p>
        </header>
      </animated.div> */}
    </>
  );
}
