import Text from "./Text";
import Image from "./Image";
import minhaFoto from "../assets/avatar.jpg"


function Bio() {
    return (
        <>
        <div className="bio">
            <Image image={minhaFoto} class="minha-foto"></Image>
            <Text>Oi, sou a Naíza Coelho e esse é o meu projeto da semana 14, MeuGithubSearch, fiz ele utilizando react, eventos e hooks. </Text>
        </div>
        </>
    )
}

export default Bio;