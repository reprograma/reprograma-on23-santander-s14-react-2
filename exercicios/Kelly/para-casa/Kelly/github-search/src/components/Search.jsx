import { useEffect, useState } from "react"
import Axios from 'axios'
import Subtitle from "./Subtitle"
import Text from "./Text"

import { GoArrowRight } from "react-icons/go";

const Search = () => {
    const[inputValue, setInputValue] = useState('')
    const[reposFromApi, setReposFromApi] = useState([])
    const[reposFiltered, setReposFiltered] = useState([])

    const handleChange = (e) => setInputValue(e.target.value)

    useEffect(() => {
        const getData = async() => {
            try{
                const response = await Axios.get('https://api.github.com/users/Kelly-Oliveira/repos')
                setReposFromApi(response.data)
            }catch (err){ 
                console.log("Erro capturado: "+ err)
            }
            
        }
        getData()
    },[])

    useEffect (() => {
        const reposFiltered = reposFromApi.filter((repo) => {
            return repo.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setReposFiltered(reposFiltered)
    }, [inputValue])


  return (
    <>
    <input placeholder="Digite o seu repositório" 
    onChange={handleChange}
    />
    {reposFiltered.map(repo => {
        return(
            <div key={repo.id} className="card">
                <Subtitle content={repo.name}/>
                <Text content={repo.description}/>
                <a href={repo.html_url} target="_blank">Conferir
                <GoArrowRight/>
                </a>
            </div>
        )
    })}
    </>
  )
}

export default Search