import Text from "./Text";
import Input from "./Input";
import Button from "./Button";

import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [repositorios, setRepositorios] = useState({})
    const [inputValue, setInputValue] = useState("")
    const [buscado, setBuscado] = useState(false) 
    const [temResultado, setTemResultado] = useState(false); 

    useEffect(() => {
        setTemResultado(Object.keys(repositorios).length > 0);
      }, [repositorios]);  

    const handleChange = (e) => setInputValue(e.target.value);

    const handleClick = async () => {
        try {
            const response = await axios.get(`https://api.github.com/repos/cyberlua/${inputValue}`)
            setRepositorios(response.data)
            setInputValue('')
        }

        catch(err) { 
            console.error("Erro capturado: " + err)
            setRepositorios({}); 
            setBuscado(true) 
            setInputValue('')
    }
}
    return ( 
        <div className="container">
            <Input placeholder="Digite seu repositório" value={inputValue} onChange={handleChange} />
            <Button onClick={handleClick} content="Buscar" />

            <div className={`card ${temResultado ? "resultado" : ""}`}>
            {repositorios.name && (
            
            <> 
            <Text className="card-text" content={repositorios.name} />
            <Text className="card-text" content={repositorios.description} />
            <a href={repositorios.html_url} target="_blank" rel="noopener noreferrer" className="card-link"> Conferir </a>
            </>
       
        )}
           {buscado && !repositorios.name && <p>Repositório não encontrado.</p>} 
        
        </div>
        </div>
     );
};
 
export default Search;