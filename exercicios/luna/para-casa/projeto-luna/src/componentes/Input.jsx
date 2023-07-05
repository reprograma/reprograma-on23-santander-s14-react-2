const Input = ({ placeholder, onChange, value }) => {
    return ( 
        <input className="container" placeholder={placeholder} value={value} onChange={onChange} />
     );
}
 
export default Input;