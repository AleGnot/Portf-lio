import { Image, TecnoContainer, TecnoIcon } from "./style";

import IconRect from "../../assets/logo192.png";
import IconsJs from "../../assets/js.png";
import IconTs from "../../assets/typescript.png";
import IconCss from "../../assets/css-3.png";
import IconHtml from "../../assets/html-5.png";

const itens = [ IconRect, IconsJs, IconTs, IconCss, IconHtml ]

function Tecnology() {
    return (
        <TecnoContainer>
            {itens.map((itens) => (
                <TecnoIcon>
                    <Image alt="" src={itens} />
                </TecnoIcon>
            ))}
        </TecnoContainer>
    )
}

export default Tecnology;