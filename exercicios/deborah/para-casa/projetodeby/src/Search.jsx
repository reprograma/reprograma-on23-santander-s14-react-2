import Subtitle from "./Subtitle";
import Text from "./Text";
// import {image} from "./Image";

import { useState } from "react";
import axios from "axios";

const Search = () => {
const [repositorios, setRepositorios] = useState ({debyfelix})
const [inputValue, setInputValue] = useState("")

const handleChange = (e) => setInputValue(e.target.value);

const handleClick = async () =>{
    try{
        const response = await axios.get('https://api.github.com/users/debyfelix/repos')
        setRepositorios(response.data)
    }

    catch(err) {
        console.error("Erro capturado: " + err)
    }
}
return(
    <div className="container">
      <Input placeholder= "Digite seu user do github" onChange={handleChange} />
      <Button onClick={handleClick} content="Buscar" />

    </div>
);
}

export default Search;