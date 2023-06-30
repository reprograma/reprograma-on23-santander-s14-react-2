import axios from "axios"
import Input from "../Input"
import Texto from "../Texto"
import { useEffect, useState } from "react"
import Titulo from "../Titulo"

const Buscar = () => {

    const [inputValue, setInputValue] = useState('')
    const [reposFromApi, setReposFromApi] = useState([])
    const [reposFiltrados, setReposFiltrados] = useState([])

    const handleChange = (e) => setInputValue(e.target.value);

    useEffect(() => {

        const getData = async () => {

            try {
                const response = await axios.get('https://api.github.com/users/FrancieleCsantos/repos')
                setReposFromApi(response.data)

            } catch (error) {
                console.log("erro" + error)
            }
           

        }
        getData()
    }, [])

    useEffect(() => {
        const reposFiltrados = reposFromApi.filter((repo) => {
            return repo.name.toLowerCase().inclides(inputValue.toLocaleLowerCase())
        })

        setReposFiltrados()

    }, [inputValue])


    return (
        <>
            <Input placeholder="Realizar pesquisa de repositório."
                onChange={handleChange} />
            {inputValue && reposFiltrados.map(repo => {
                return (
                    <div kay={repo.id} className="card">
                        <Titulo content={repo.name} />
                        <Texto text={repo.description} />
                        <a href={repo.html_url} target="blank"></a>
                    </div>
                )
            })}
        </>

    )
}

export default Buscar;