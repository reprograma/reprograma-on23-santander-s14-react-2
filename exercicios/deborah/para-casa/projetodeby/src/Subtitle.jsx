import {text} from './Text';
import {Subtitle} from './Subtitle';


const Bio = () => {
return (
    <div>
        <Subtitle text= "Hello World De Novo"/>
        <Text text="Oioi Sou Deby em mais um projeto de casa usando React jsx" />
        <Image img={image} alt="imagem ilustrativa" />
    </div>
);

}

export default Bio;