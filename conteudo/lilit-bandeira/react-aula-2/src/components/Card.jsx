import Image from './Image'
import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'

const Card = ({key, image, altText, title, subtitle}) => {
  return (
    <div key={key} className="card">
      <Image image={image} altText={altText}/>
      <CardTitle content={title}/>
      <CardSubtitle content={subtitle}/>
    </div>
  )
}

export default Card
