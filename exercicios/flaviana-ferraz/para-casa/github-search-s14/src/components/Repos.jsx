import { useState, useEffect} from "react"
import Axios from 'axios'
import Subtitle from "./Subtitle"
import Text from "./Text"

const Repos = () => {
    const [repositories, setRepositories] = useState([])
    const url = 'https://api.github.com/users/flavianafxt/repos'

    useEffect(() => {
        async function getRepositories(){
        const response = await Axios.get(url)
        setRepositories(response.data)
        console.log(response.data)
        } 
        getRepositories()
     }, [])

     return(
        <div className="card_repo">
          {repositories.map((repository)=>{
             return (
                <div key={repository} className="repository">
                    <Subtitle className="repository-title" content={repository.name}/>
                    <Text className="repository-description" description = {repository.description}/>
                    <div className="language">
                        <Text className="language-text" description="Linguagem: "/>
                        <Text className="repository-text" description = {repository.language ? repository.language:"-"}/>
                    </div>
                    <a href={repository.html_url} target="_blank" rel="noreferrer" ><Text className="repository-link" description = "Acesse o repositório" /></a>
                </div>
             )            
            })
            }  
        </div>
     )
}
       

    export default Repos
