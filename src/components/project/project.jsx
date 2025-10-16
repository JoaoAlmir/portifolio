import { useState } from "react";
import { useTrail, animated } from "@react-spring/web";
import './project.css';
import neon from '../../assets/neonFlix.png'
import dopamina from '../../assets/dopamina.png'
import clotilde from '../../assets/clotilde.png'

const projectsData = [
    { id: 1, title: "Dopamina", img: dopamina, link: "https://dopamina-one.vercel.app/" },
    { id: 2, title: "NeonFlix", img: neon, link: "https://neon-flix.vercel.app/" },
    { id: 3, title: "Vó clotilde", img: clotilde, link: "https://vo-clotilde.vercel.app/" },
];

const Project = () => {
    const [expanded, setExpanded] = useState(false);

    const trail = useTrail(projectsData.length, {
        opacity: expanded ? 1 : 0,
        scale: expanded ? 1 : 0.8,
        from: { opacity: 0, scale: 0.8 },
        config: { mass: 2, tension: 120, friction: 30 },
    });

    return (
        <div className={`project-container ${expanded ? "expanded" : ""}`}>
            <div className="project">
                {!expanded && <div>
                    <h1>I build &<br />design stuff</h1>
                </div>}

                {!expanded && <div>
                    <h2>
                        Open source <br />
                        projects, web apps <br />
                        and experimentals.
                    </h2>
                </div>}

                {!expanded && (
                    <button onClick={() => setExpanded(true)}>See my work</button>
                )}

                {expanded && (<h1>Projects</h1>)
                }

                {expanded && (
                    <div className="project-grid">
                        {trail.map((style, index) => {
                            const project = projectsData[index];
                            return (
                                <animated.div
                                    className="grid-item"
                                    key={project.id}
                                    style={style}
                                >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.img} alt={project.title} />
                                        <p>{project.title}</p>
                                    </a>
                                </animated.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Project;
