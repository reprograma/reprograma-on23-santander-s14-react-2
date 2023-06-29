import Imagem from '../Imagem'
import Texto from '../Texto'
import Titulo from '../Titulo'


const Card = ({key, image, altText, title, subtitle}) => {
  return (
    <div key={key} className="card">
      <Imagem imag={image} altText={altText}/>
      <Titulo content={title}/>
      <Texto text={subtitle}/>
    </div>
  )
}

export default Card
