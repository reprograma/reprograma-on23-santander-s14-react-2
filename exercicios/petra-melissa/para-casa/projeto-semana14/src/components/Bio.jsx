import Text from "./Text";
import Image from "./Image";
import minhaFoto from "../assets/menininha.jpg"


function Bio() {
    return (
        <>
        <div className="bio">
            <Image image={minhaFoto} class="minha-foto"></Image>
            <Text>Olá, prazer, sou Petra. Bem vindos ao meu projeto da semana 14 da Reprograma.</Text>
        </div>
        </>
    )
}

export default Bio;