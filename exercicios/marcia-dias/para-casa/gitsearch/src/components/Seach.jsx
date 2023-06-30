import Input from "./Input"
import Button from "./Button"
import { useEffect, useState } from 'react'
import Axios from "axios"


function Seach() {
    const [usuaria, setUsuaria] = useState({})
    const [username, setInputValue] = useState("")

    const handleChange = (e) => setInputValue(e.target.value);

    const handleClick = async () => {
        try {
            const response = await Axios.get(`https://api.github.com/users/${username}`)
            setUsuaria(response.data)
            
        }

        catch (err) {
            setUsuaria({ message: "Usuário não Localizado" })
            console.error("Erro Capturado" + err)
        }
    };

    return (
        <div className="busca">

            <Input placeholder="Buscar Usuária" onChange={handleChange} />
            <Button onClick={handleClick} content="Buscar" />
            
            {usuaria.message ?
                <p>{usuaria.message}</p>
                :
                
                <div className="card">
                    <a href={usuaria.html_url}><img src={usuaria.avatar_url}></img></a>
                    <h2>{usuaria.name}</h2>
                    <h3>{usuaria.login}</h3>
                    <h3>{usuaria.bio}</h3>
                </div>
            }
        </div>
    )
}

export default Seach