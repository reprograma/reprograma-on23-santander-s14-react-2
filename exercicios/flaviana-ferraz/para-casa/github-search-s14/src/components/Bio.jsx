import Subtitle from "./Subtitle";
import Image from "./Image";
import myphoto from "../assets/flaviana.jpeg";
import Text from "./Text";

function Bio(){
    return(
    <div className="bio">
        <Subtitle content="Olá, eu sou a Flaviana!!!"/>
        <Text description = "Gestora Ambiental em transição de carreira para a tecnologia (Desenvolvedora Front End), aluna {Reprograma} ."/>
        <Image className="bioImage" src={myphoto} alt="foto de Flaviana, autora do site"/>
    </div>
    )
}

export default Bio;