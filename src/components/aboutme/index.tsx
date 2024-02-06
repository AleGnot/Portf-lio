import { TextPart, Title, AboutContaine, AboutText, Container, ImagePart, Img, EmailButton, Copied } from "./style";
import { useContext, useState, useRef } from "react";
import { LangContext } from "../../contexts/lengContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import Pic from "../../assets/euBonito.png";

function About() {
    const {isEnglish} = useContext(LangContext);
    const [emailCopied, setEmailCopied] = useState(false);
    const emailRef = useRef<HTMLSpanElement>(null);

    const handleEmailCopy = () => {
        const email = emailRef.current?.textContent;

        if (email){
            navigator.clipboard.writeText(email);
            setEmailCopied(true);
            
            setTimeout (() => {
                setEmailCopied(false);
            }, 2000);
        }
    }

    return (
        <Container>
            <TextPart>
                {isEnglish? <Title>About me</Title> : <Title>Sobre mim</Title>}
                <AboutContaine> 
                    <AboutText>
                        {isEnglish?
                            `My name is Alessandro Garcia, also known as Alex, I'm 20 years old and am currently trying to kickstart my carrer as a developer.
                            I've been in this field for about 6 months, but I still don't have significant amount of professional experience.
                            I'm constantly searching for new ways to improve and expand my knowledge. I love to code and am striving to turn it into my profession.`
                            :
                            `Meu nome é Alessandro Garcia, também conhecido como Alex. Tenho 20 anos e estou iniciando minha
                            carreira como desenvolvedor. Estou na área hà 6 meses, porém ainda não possuo muita experiência profissional nela.
                            Ando sempre buscando novas formas de me aperfeiçoar e expandir meu conhecimento, adoro programar e estou tentando transformar
                            essa paixão em meu trabalho.`
                        }
                    </AboutText>
                    <AboutText>
                        {isEnglish? 
                            `The technologies I'm used to work with and have more knowledge about are: JavaScript, TypeScript and ReactNative.`
                            :
                            `As tecnologias com as quais eu tenho maior conhecimento e costumo trabalhar são: JavaScript, TypeScript e ReactNative.`
                        }
                    </AboutText>
                </AboutContaine>
            </TextPart>
            <ImagePart>
                <Img alt="" src={Pic}/>
                {emailCopied? 
                    <Copied>{isEnglish? <span>Copied!</span> : <span>Copiado!</span>}</Copied>
                    :
                    <EmailButton onClick={() => handleEmailCopy()}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f8fafc", height: "1rem", margin: "8px" }}/>
                        <span ref={emailRef}>
                            alessandro.skull677@gmail.com
                        </span>
                    </EmailButton>
                }
                {isEnglish? <span>Send me a email ↑↑</span> : <span>Me manda um email ↑↑</span>}
            </ImagePart>
        </Container>
    )
}

export default About;