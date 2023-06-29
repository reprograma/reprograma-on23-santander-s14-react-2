import Text from './Text'
import Subtitle from './Subtitle';
import Image from './Image'

import cat from '../assets/github.png'



const Bio = () => {
    return ( 
        <div>
            <Subtitle text="Bora tirar uma panca, parcera" />
            <Text content="Sou aluna da Reprograma e esse aqui é mais um projeto de casa utilizando o react jsx" />
            <Image image={cat} alt="imagem ilustrativa" />
        </div>
     );
}
 
export default Bio;

