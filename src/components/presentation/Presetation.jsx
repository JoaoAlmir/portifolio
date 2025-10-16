import "./Presentation.css";
import { useContext } from "react";
import Language from "../../context/Language.jsx";
import profile from "../../assets/profile.jpeg";

const Presentation = () => {
    const { language, setLanguage } = useContext(Language);

    return (
        <section className="presentation-container">
            <div className="presentation-leftSide">
                <h1>
                    {language === "pt" ? "Desenvolvedor Frontend." : "Frontend Developer."}
                </h1>
                <h2>
                    {language === "pt"
                        ? "Gosto de criar projetos frontend limpos e funcionais que proporcionam uma boa experiência ao usuário."
                        : "I like creating clean and functional frontend projects that provide a good user experience."}
                </h2>
            </div>
            <div className="presentation-rightSide">
                <img src={profile} alt="Placeholder" />
            </div>
        </section>
    );
}

export default Presentation;
