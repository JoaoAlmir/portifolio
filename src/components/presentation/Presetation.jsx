import "./Presentation.css";
import { useContext } from "react";
import Language from "../../context/Language.jsx";

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
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQEQe04aUxhNlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721960668271?e=1763596800&v=beta&t=noyMvmPuWgZkZUthzh01hNkRgGyIa6f2AULYHK47WkU" alt="Placeholder" />
            </div>
        </section>
    );
}

export default Presentation;
