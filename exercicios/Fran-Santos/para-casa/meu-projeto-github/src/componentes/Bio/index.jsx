
import Texto from '../Texto'
import Imagem from '../Imagem';
import MeuAvatar from '../../assets/MinhaFoto.jpeg'
function Bio () {
    
    return(
<>
<div className='container-Bio'>
<Texto text={"Me apaixonei pelo Front-end, pois consigo ver a magia acontecendo diante de meus olhos, posso encantar outras pessoas com meu trabalho."}/>
<Imagem  img={MeuAvatar}/>
<Texto  text={"Vem conferir meu perfil e repositorios Git... Pesquise pelo meu usuário FranCsantos"}/>
</div>
</>

    )
}

export default Bio;