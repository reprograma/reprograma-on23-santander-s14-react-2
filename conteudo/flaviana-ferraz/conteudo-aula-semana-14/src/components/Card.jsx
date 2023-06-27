import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import Image from "./Image";

const Card = ({key, image, altText, title, subtitle}) => {
    return(
        <div key={key} className="card">
            <Image image={image} altText={altText}/>
            <CardTitle content={title}/>
            <CardSubtitle text={subtitle}/>
        </div>
    )
}

export default Card