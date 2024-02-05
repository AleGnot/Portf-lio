import { Container, CardContainer, Card, CardImg, CardTitle, CardDescr } from "./style";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useContext, useState, useEffect } from "react";
import { LangContext } from "../../contexts/lengContext";

register();

const itens = [
    {
        nome: "Trabalhando nisso?",
        descricao: `Atualmente ainda não possuo um projeto para expor nessa seção :(`,
        descricao2: `Talvez você possa me ajudar e permitir que nossa futura colaboração seja a primeira que eu exponha aqui. O que me diz?`,
        imagem: "https://media.tenor.com/Mle3dtAOrfEAAAAd/cat-keyboard.gif",
        links: "https://github.com/AleGnot/"
    },
];

const engItens = [
    {
        nome: "Working on it?",
        descricao: `Currently, I don't have a project to expose here :(`,
        descricao2: `Maybe you could help me and allow our future collaboration to be the first one I showcase here. What do you say?`,
        imagem: "https://media.tenor.com/Mle3dtAOrfEAAAAd/cat-keyboard.gif",
        links: "https://github.com/AleGnot/"
    },
];

function ProfProjects() {
    const {isEnglish} = useContext(LangContext);

    const [slidePerView, setSlidePerview] = useState(2);

    useEffect(() => {
        function resizeHandler(){
            if(window.innerWidth < 769){
                setSlidePerview(1);
            }else{
                setSlidePerview(2);
            }
        }

        resizeHandler();

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, []);

    const textSelected = () => {
        if (isEnglish === true) {
            return (
                <>
                {engItens.map((itens) => (
                    <SwiperSlide >
                        <CardContainer>
                            <Card>
                                <CardImg alt="" src={itens.imagem}/>
                                <a href={itens.links} target="blank" rel="noopener noreferrer">
                                    <CardTitle>{itens.nome}</CardTitle>
                                </a>
                                <CardDescr>{itens.descricao}</CardDescr>
                                <CardDescr>{itens.descricao2}</CardDescr>
                            </Card>
                        </CardContainer>
                    </SwiperSlide>
                ))}
                </>
            )
        }else {
            return (
                <>
                {itens.map((engIten) => (
                    <SwiperSlide >
                        <CardContainer>
                            <Card>
                                <CardImg alt="" src={engIten.imagem}/>
                                <a href={engIten.links} target="blank" rel="noopener noreferrer">
                                    <CardTitle>{engIten.nome}</CardTitle>
                                </a>
                                <CardDescr>{engIten.descricao}</CardDescr>
                                <CardDescr>{engIten.descricao2}</CardDescr>
                            </Card>
                        </CardContainer>
                    </SwiperSlide>
                ))}
                </>
            )
        }
    }
    return (
        <Container>
            <Swiper
                slidesPerView={slidePerView}
                navigation
                style={{display:'flex', justifyContent: 'space-evenly', alignItems: 'space-evenly', height: '95%', width: '100%'}}
            >
                {textSelected()}
            </Swiper>
        </Container>
    )
}

export default ProfProjects;