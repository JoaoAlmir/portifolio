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
              Currently, I’m building my career in web development, having
              completed two internships that strengthened both my frontend and
              backend skills.
            </p>
            <p>
              Most recently, I worked at JIT Technology as a Frontend Developer,
              where I developed user interfaces using React, contributing to
              real projects and improving usability and design consistency across
              products.
            </p>
            <p>
              Before that, I was a Fullstack Developer at the Núcleo de Práticas
              em Informática (NPI), where I built and maintained applications
              using Vue.js on the frontend and Spring Boot on the backend,
              applying agile methodologies and collaborating closely with
              multidisciplinary teams.
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
              Atualmente, estou construindo minha carreira em desenvolvimento
              web, tendo concluído dois estágios que fortaleceram minhas
              habilidades tanto no frontend quanto no backend.
            </p>
            <p>
              Mais recentemente, atuei na JIT Technology como Desenvolvedor
              Frontend, onde desenvolvi interfaces de usuário com React,
              contribuindo para projetos reais e aprimorando a usabilidade e a
              consistência de design dos produtos.
            </p>
            <p>
              Antes disso, fui Desenvolvedor Fullstack no Núcleo de Práticas em
              Informática (NPI), onde construí e mantive aplicações utilizando
              Vue.js no frontend e Spring Boot no backend, aplicando metodologias
              ágeis e colaborando de perto com equipes multidisciplinares.
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
