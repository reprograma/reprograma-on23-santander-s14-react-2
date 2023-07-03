import axios from "axios"
import Texto from "../Texto"
import { useEffect, useState } from "react"
import Titulo from "../Titulo"

const Buscar = () => {
    const [inputValue, setInputValue] = useState('')
    const [reposFromApi, setReposFromApi] = useState([])
    const [reposFiltered, setReposFiltered] = useState([])
  
    const handleChange = (e) => setInputValue(e.target.value)
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('https://api.github.com/users/francielecsantos/repos')
          setReposFromApi(response.data)
        }
        catch(err) {
          console.error("Erro capturado: " + err)
        }
      }
      getData()
    }, [])
  
    useEffect(() => {
      const reposFiltered = reposFromApi.filter((repo) => {
        return repo.name.toLowerCase().includes(inputValue.toLowerCase())
      })
      setReposFiltered(reposFiltered)
    }, [inputValue, reposFromApi])
  
    return (
      <div className="search">
        <input 
          placeholder="Digite um repositório para buscar" 
          onChange={handleChange} 
        />
        {inputValue && reposFiltered.map(repo => {
          return (
            <div key={repo.id} className="card">
              <Titulo content={repo.name} />
              <Texto content={repo.description} />
              <a href={repo.html_url} target="_blank">
                Conferir
              </a>
            </div>
          )
        })}
      </div>
    )

  
  
}

export default Buscar;