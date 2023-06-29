import { useState, useEffect } from "react"
import Axios from "axios"



function Repor (){
    const [repositorios, setRepositorios] = useState([])
    const url = "https://api.github.com/users/magaspe/repos"

    useEffect(() => {
        async function getRepor() {
            const response = await Axios.get(url)
            setRepositorios(response.data)
            console.log(response.data)  
        } 
        getRepor()
        }, [])

    return(
        
        <div className="cards">
        {repositorios.map((repositorio) =>{
            return(
              <div className="repo">
                <h3>{repositorio.name}</h3>
                <p>{repositorio.description}</p>
                <p>{repositorio.language}</p>
                <a href={repositorio.html_url}>Confira</a>
              </div> 
              )

        })} 

    </div>

)
}

export default Repor