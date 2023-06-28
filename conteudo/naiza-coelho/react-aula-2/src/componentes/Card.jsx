import CardSubtitle from "./CardSubtitle"
import CardTitle from "./CardTitle"
import Image from "./image"

function Card({key, image, alText, title, subtitle}) {
    return(
        <div key={key} className="card">
            <Image image={image} alText={alText}></Image>
            <CardTitle content={title}></CardTitle>
            <CardSubtitle content={subtitle}></CardSubtitle>
        </div>
    )
    }
    
    export default Card