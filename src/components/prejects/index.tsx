import { Card, CardContainer, CardDescr, CardImg, CardTitle, Container } from "./style";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import FateProj from "../../assets/expositorTemplateFate.png";
import VeiaProj from "../../assets/expositorTemplateVeia.png";
import YoutubeProj from "../../assets/expositorTemplateYoutube.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useContext, useState, useEffect } from "react";
import { LangContext } from "../../contexts/lengContext";

register();

const itens = [
    {
        name: "Clone da Interface do Youtube",
        describe: `Um projeto que imita a interface do youtube e algumas de suas principais funcionalidades.`,
        describe2: `Este projeto utiliza-se tanto da API publica do youtube como, também, de uma API 
        desenvolvida por mim para ter acesso aos vídeos e a funcionalidade de login.`,
        image: YoutubeProj,
        link: "https://github.com/AleGnot/InterfaceYouTube-Clone"
    },
    {
        name: "Fate/GO NA servant-list",
        describe: `Um projeto simples que utiliza a API criada pela Atlas Academy e tem como intuito listar todos
        os personagens disponiveis no servidor NA do jogo até o momento.`,
        describe2: `Este foi um dos meus primeiros projetos e me ajudou a aprender sobre a implementação de APIs na aplicação.`,
        image: FateProj,
        link: "https://github.com/AleGnot/Servant-ListFGO"
    },
    {
        name: "Jogo da velha",
        describe: `Este é outro projeto simples que consiste, basicamente, em um simples jogo da velha.`,
        describe2: `Com este projeto consegui aprender muito sobre CSS e como estilizar elementos para tornar projetos futuros
        ainda melhores e mais bonitos.`,
        image: VeiaProj,
        link: "https://github.com/AleGnot/Veia-game-ticTacToe"
    },
    {
        name: "Trabalhando nisso!",
        describe: `Atualmente estou trabalhando no projeto que ficará aqui. Quando o mesmo estiver concluído,
        vou atualizar esse card.`,
        describe2: `Enquanto isso, sinta-se à vontade para dar uma olhada em meus outros projetos que
        estão disponiveis no GitHub (｡◕‿‿◕｡)`,
        image: "https://media.tenor.com/WSg2xPUgFY8AAAAd/cat-hissing.gif",
        link: "https://github.com/AleGnot/"
    },

]

const engIten = [
    {
        name: "Youtube's Interface Clone",
        describe: `A project that mimics Youtube's interface and some of its principal functionalities.`,
        describe2: `This project uses both the public Youtube API and also an API developed by me to access
        videos and the login feature.`,
        image: YoutubeProj,
        link: "https://github.com/AleGnot/InterfaceYouTube-Clone"
    },
    {
        name: "Fate/GO NA servant-list",
        describe: `A simple project that uses the Atlas Academy API to display and list every character available
        to date on the NA server of the game.`,
        describe2: `This was one of the first projects I've made, and it helped me to learn more about implementing APIs.`,
        image: FateProj,
        link: "https://github.com/AleGnot/Servant-ListFGO"
    },
    {
        name: "Tic tac toe",
        describe: `This is yet another simple project that is basically a tic-tac-toe game.`,
        describe2: `With this project, I learned more about CSS and how to style components to make future projects better
        and more visually appealing.`,
        image: VeiaProj,
        link: "https://github.com/AleGnot/Veia-game-ticTacToe"
    },
    {
        name: "Working on it!",
        describe: `I'm currently working on this project. When it is concluded, I'll update this card.`,
        describe2: `Feel free to check my other projects on my GitHub while I'm working on this one (｡◕‿‿◕｡)`,
        image: "https://media.tenor.com/WSg2xPUgFY8AAAAd/cat-hissing.gif",
        link: "https://github.com/AleGnot/",
    },
]

function Projects() {
    const { isEnglish } = useContext(LangContext);


    const [slidePerView, setSlidePerview] = useState(2);

    useEffect(() => {
        function resizeHandler() {
            if (window.innerWidth < 769) {
                setSlidePerview(1);
            } else {
                setSlidePerview(2);
            }
        }

        resizeHandler();

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, []);

    const lenguageText = () => {
        if (isEnglish === true) {
            return (
                <>
                    {engIten.map((itens) => (
                        <SwiperSlide>
                            <CardContainer>
                                <Card>
                                    <CardImg alt="" src={itens.image} />
                                    <a href={itens.link} target="blank" rel="noopener noreferrer">
                                        <CardTitle>{itens.name}</CardTitle>
                                    </a>
                                    <CardDescr>{itens.describe}</CardDescr>
                                    <CardDescr>{itens.describe2}</CardDescr>
                                </Card>
                            </CardContainer>
                        </SwiperSlide>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {itens.map((engIten) => (
                        <SwiperSlide>
                            <CardContainer>
                                <Card>
                                    <CardImg alt="" src={engIten.image} />
                                    <a href={engIten.link} target="blank" rel="noopener noreferrer">
                                        <CardTitle>{engIten.name}</CardTitle>
                                    </a>
                                    <CardDescr>{engIten.describe}</CardDescr>
                                    <CardDescr>{engIten.describe2}</CardDescr>
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
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95%', width: '100%' }}
            >
                {lenguageText()}
            </Swiper>
        </Container>
    )
};

export default Projects;