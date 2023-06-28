import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExemploEventos from './componentes/ExemploEventos'
import Cards from './componentes/Cards'
import Contador from './componentes/Contador'
import Filmes from './componentes/Filmes'
import MainTitle from './componentes/MainTitle'
import Input from './componentes/input'
import Button from './componentes/Button'
import Axios from 'axios'
import Card from './componentes/Card'

function App() {
  //const [count, setCount] = useState(0)
  const [filmes, setFilmes] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filmesFiltrados, setFilmesFiltrados] = useState([])

  const url = 'https://ghibliapi.vercel.app/films'

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    async function getFilmes() {
      const response = await Axios.get(url)
      setFilmes(response.data)
    }
    getFilmes()

  }, [])


  useEffect(() => {
    const filmesFiltrados = filmes.filter((filme) => {
      return filme.title.toLowerCase().includes(inputValue)
    })
    setFilmesFiltrados(filmesFiltrados)
  }, [inputValue, filmes])
  return (
    // <ExemploEventos></ExemploEventos>
    //<Cards></Cards>
    //<Contador></Contador>
    //<Filmes></Filmes>
    <>
      <MainTitle content="Busca"></MainTitle>
      <Input placeholder="Digite o nome do filme" handleChange={handleChange}></Input>
      {/* <Button content="" handeClick={ }></Button> */}

      {
        inputValue && filmesFiltrados.map((filme) => {
          return (
            <Card key={filme.id} image={ filme.image} alText={ filme.title} title={filme.title } subtitle={ filme.original_title}></Card>
          )
        })
      }
    </>
  )
}

export default App
