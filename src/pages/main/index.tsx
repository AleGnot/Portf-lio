import { useContext, useState } from "react";

import Header from "../../components/header";
import Socials from "../../components/social";
import Tecnology from "../../components/tecnologias";
import Projects from "../../components/prejects/index";
import ProfProjects from "../../components/profiprojects/profissional";
import Footer from "../../components/footer";
import About from "../../components/aboutme";

import { Apresentation, Section, Name, MainPage, ChoiceCont, ChoiceButtonsCont, ButtonChoice, ButtonChoice2 } from "./styleMain";

import { LangContext } from "../../contexts/lengContext";


function Main() {
    const {isEnglish} = useContext(LangContext);
    const [choice, setChoice] = useState(true);
    
    return (
        <>
            <Header/>
            <Section>
                <MainPage>
                    <Name>Alessandro Garcia</Name>
                    <Apresentation >
                        {isEnglish? 
                            "I'm a 20 years old trying to code :v"
                            :
                            "Tenho 20 anos e estou tentando programar :v"
                        }
                    </Apresentation>
                    <Socials/>
                </MainPage>
            </Section>
            <Section>
                <Tecnology/>
                <About/>
            </Section>
            <Section>
                <ChoiceCont>
                    <ChoiceButtonsCont>
                        <ButtonChoice choiced={choice} onClick={() => setChoice(true)}>
                            <span>{isEnglish? "Study Projects" : "Projetos de estudo"}</span>
                        </ButtonChoice>
                        <ButtonChoice2 choiced={choice} onClick={() => setChoice(false)}>
                            <span>{isEnglish? "Clients" : "Clientes"}</span>
                        </ButtonChoice2>
                    </ChoiceButtonsCont>
                    {choice? <Projects/> : <ProfProjects/>}
                </ChoiceCont>
            </Section>
            <Footer/>
        </>
    )
}

export default Main;