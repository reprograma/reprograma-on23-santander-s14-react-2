const Image = ({image, altText}) => {
    return ( 
        <img className="pic" src={image} alt={altText} />
     );
}
 
export default Image;