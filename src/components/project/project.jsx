import { useTrail, animated } from "@react-spring/web";
import "./project.css";
import neon from "../../assets/neonFlix.png";
import dopamina from "../../assets/dopamina.png";
import clotilde from "../../assets/clotilde.png";

const projectsData = [
    { id: 1, title: "Dopamina", img: dopamina, link: "https://dopamina-one.vercel.app/" },
    { id: 2, title: "NeonFlix", img: neon, link: "https://neon-flix.vercel.app/" },
    { id: 3, title: "Vó Clotilde", img: clotilde, link: "https://vo-clotilde.vercel.app/" },
];

const Project = () => {
    const trail = useTrail(projectsData.length, {
        opacity: 1,
        scale: 1,
        from: { opacity: 0, scale: 0.9 },
        config: { mass: 2, tension: 180, friction: 20 },
    });

    return (
        <section className="project-container">
            <div className="project">
                <h1>I build stuff</h1>
                <h2>Open source
                    projects, web apps
                    and experimentals.</h2>
                <div className="project-grid">
                    {trail.map((style, index) => {
                        const { id, title, img, link } = projectsData[index];
                        return (
                            <animated.div
                                key={id}
                                className="grid-item"
                                style={style}
                            >
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={img} alt={title} />
                                    <p>{title}</p>
                                </a>
                            </animated.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
