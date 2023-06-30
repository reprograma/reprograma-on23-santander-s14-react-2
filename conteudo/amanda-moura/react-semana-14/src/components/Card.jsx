import CardSubtitle from "./CardSubtitle"
import CardTitle from "./CardTitle"
import Image from "./Image"

const Card = ({image, altText, title, subtitle}) => {
    return (
        <div className="card">
            <Image image={image} altText={altText}/>
            <CardTitle conteudo={title}/>
            <CardSubtitle conteudo={subtitle}/>
        </div>
    )
}
export default Card