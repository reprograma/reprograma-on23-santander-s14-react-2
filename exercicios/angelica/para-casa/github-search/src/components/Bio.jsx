import Subtitle from './Subtitle'
import Paragrafo from './Paragrafo'
import Image from './Image'
const Bio = (props) => {
    return (
        <div className="Bio">
            <Subtitle subtitle={props.text}/>
            <Paragrafo text= {props.descricao}/>
            <a href="#" onclick="window.location.href='https://github.com/${login}'" target ="_blank">
                <Image class="image" image={props.image}/>
            </a>
            {/* Deveria direcionar para o github da usuária, mas não vai.   */}
    
           
        </div>
        
    );
};

export default Bio;


