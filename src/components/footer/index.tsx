import Socials from "../social";
import { ButtonsSec, Container, MarcaDagua, VoltarTopo } from "./style";

function Footer() {
    const topScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        <Container>
            <ButtonsSec>
                <Socials/>
                <VoltarTopo onClick={() => topScroll()}>
                    <span>^</span>  
                </VoltarTopo>
            </ButtonsSec>
            <MarcaDagua>
                by Alessandro Garcia
            </MarcaDagua>
        </Container>
    )
};

export default Footer;