import { Container, IconContainer, IconSpace } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Socials() {

    return(
        <>
            <Container>
                <a href="https://www.linkedin.com/in/aleg-not" rel="noopener noreferrer">
                    <IconContainer>
                        <IconSpace>
                            <FontAwesomeIcon icon={faLinkedin}  />
                        </IconSpace>
                    </IconContainer>
                </a>
                <a href="https://github.com/AleGnot" rel="noopener noreferrer">
                    <IconContainer>
                        <IconSpace>
                            <FontAwesomeIcon icon={faGithub} />
                        </IconSpace>
                    </IconContainer>
                </a>
                <a href="https://www.instagram.com/ale_garcia44/" rel="noopener noreferrer">
                    <IconContainer>
                        <IconSpace>
                            <FontAwesomeIcon icon={faInstagram} />
                        </IconSpace>
                    </IconContainer>
                </a>
            </Container>
        </>
    )
}

export default Socials;