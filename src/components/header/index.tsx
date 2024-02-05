import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { Container, MenuLists, ButtonsMenu, SwitchLabel, SwitchInput, Switch } from "./style";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../contexts/lengContext";

function Header() {
  const navigate = useNavigate();
  const {isEnglish, setIsEnglish} = useContext(LangContext)

  const scrollFun = (y: number) =>{
    const height = window.innerHeight;
    const calc = y*((height) - 70);
    
    window.scrollTo({
      top: calc,
      behavior: "smooth"
    });

    navigate('/');
  }

  return (
    <Container>
      <MenuLists>
        <ButtonsMenu onClick={() => scrollFun(0)}>
            <FontAwesomeIcon icon={faHouse} style={{color: "#5869D6", height: "1rem"}} />
            <span>Home</span>
        </ButtonsMenu>
        <ButtonsMenu onClick={() => scrollFun(1)}>
            <FontAwesomeIcon icon={faUser} style={{color: "#5869D6", height: "1rem"}} />
            <span>{isEnglish? "About me" : "Sobre mim"}</span>
        </ButtonsMenu>
        <ButtonsMenu onClick={() => scrollFun(2)}>
              <FontAwesomeIcon icon={faDiagramProject} style={{color: "#5869D6", height: "1rem"}} />
            <span>{isEnglish? "Projects" : "Projetos"}</span>  
        </ButtonsMenu>
      </MenuLists>
      <MenuLists>
        <SwitchLabel onChange={ () => setIsEnglish(!isEnglish) }>
          <span>{isEnglish? "English" : "Português"}</span>
          <SwitchInput type="checkbox" />
          <Switch />
        </SwitchLabel>
      </MenuLists>
    </Container>
  );
}

export default Header;
