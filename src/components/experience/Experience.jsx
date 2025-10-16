import "./Experience.css";

import image from "../../assets/experienceGif.gif"
const Experience = () => {



    return (
        <section className="experience-container">
            <div className="experience-content">
                <h1>Over the years,</h1>

                <p>I've worked on a variety of web projects, from full-stack applications to modern, responsive interfaces focused on performance and user experience.</p>

                <p>Currently, I’m building my career in web development, having completed two internships that strengthened both my frontend and backend skills.</p>

                <p>Most recently, I worked at JIT Technology as a Frontend Developer, where I developed user interfaces using React, contributing to real projects and improving usability and design consistency across products.</p>

                <p>Before that, I was a Fullstack Developer at the Núcleo de Práticas em Informática (NPI), where I built and maintained applications using Vue.js on the frontend and Spring Boot on the backend, applying agile methodologies and collaborating closely with multidisciplinary teams.</p>

                <p>These experiences have given me a strong foundation in building scalable, maintainable, and user-focused web solutions.</p>

            </div>
            <div className="experience-image">
                <img src={image} alt="Experience GIF" />
            </div>

        </section >
    );
}

export default Experience;
