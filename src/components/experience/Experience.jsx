import "./Experience.css";
import image from "../../assets/experienceGif.gif";
import { useContext } from "react";
import Language from "../../context/Language.jsx";

const Experience = () => {
  const { language } = useContext(Language);

  return (
    <section className="experience-container">
      <div className="experience-content">
        {language === "en" ? (
          <>
            <h1>Over the years,</h1>
            <p>
              I've worked on a variety of web projects, from full-stack
              applications to modern, responsive interfaces focused on
              performance and user experience.
            </p>
            <p>
              Most recently, I worked at JIT Technology as a Frontend Developer,
              where I developed user interfaces using React, contributing to
              real projects and improving usability and design consistency across
              products. Previously, I was a Fullstack Developer at the Núcleo de
              Práticas em Informática (NPI), building applications with Vue.js and
              Spring Boot, applying agile methodologies and collaborating closely
              with teams.
            </p>
            <p>
              These experiences have given me a strong foundation in building
              scalable, maintainable, and user-focused web solutions.
            </p>
          </>
        ) : (
          <>
            <h1>Ao longo dos anos,</h1>
            <p>
              Trabalhei em diversos projetos web, desde aplicações full-stack até
              interfaces modernas e responsivas, focadas em desempenho e
              experiência do usuário.
            </p>
            <p>
              Mais recentemente, atuei na JIT Technology como Desenvolvedor
              Frontend, desenvolvendo interfaces com React e aprimorando usabilidade
              e consistência de design. Antes disso, fui Desenvolvedor Fullstack no
              NPI, construindo aplicações com Vue.js e Spring Boot, aplicando
              metodologias ágeis e colaborando com equipes multidisciplinares.
            </p>
            <p>
              Essas experiências me deram uma base sólida para criar soluções web
              escaláveis, sustentáveis e voltadas para o usuário.
            </p>
          </>
        )}
      </div>


      <div className="experience-image">
        <img src={image} alt="Experience GIF" />
      </div>
    </section>
  );
};

export default Experience;
