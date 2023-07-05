const Button = ({ content, onClick }) => {
    return ( 
        <button className="container" onClick={onClick}>{content}</button>
     );
}
 
export default Button;