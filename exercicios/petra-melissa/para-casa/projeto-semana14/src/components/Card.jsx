import Image from "./Image";
import Text from "./Text";
import Subtitle from "./Subtitle";



function Card({ titulo, descricao, linguagem, id,link }) {
    return (

        <div className='repository card' key={id}>
            <Subtitle>{titulo}</Subtitle>
            <Text class="repository-description">{descricao ? descricao : 'Sem descrição'}</Text>
            <div className='repository-details'>
                <Text class="repository-text">{linguagem ? linguagem : 'Sem linguagem'}</Text>
                <a href={link} target="_blank">Confira</a>

            </div>
        </div>

    )
}

export default Card;