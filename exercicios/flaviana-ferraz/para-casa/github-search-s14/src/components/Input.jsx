import Lupa from '../assets/lupa.png'

const Input = ({placeholder, className, handleChange}) => {
    return(
        <div className="input-header">
            <input 
            type="text"
            placeholder={placeholder}
            className={className} 
            onChange={handleChange}/>
            <img src={Lupa} alt="ícone de uma lupa" />
        </div> 
    )
}

export default Input