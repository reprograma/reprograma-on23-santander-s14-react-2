import MainTitle from './components/MainTitle'
import Input from './components/Input'
import Card from './components/Card'


import './App.css'
import { useEffect, useState } from 'react'
import Axios from 'axios'


function App() {
  const [inputValue, setInputValue] = useState('')
  const [filmes, setFilmes] = useState([])
  const [filmesFiltrados, setFilmesFiltrados] = useState([])

  const handleChange = (e) => setInputValue(e.target.value) 

  useEffect(() => {
    async function getFilmes() {
        const response = await Axios.get('https://ghibliapi.vercel.app/films')
        setFilmes(response.data)
    }
    getFilmes()
}, [])

  useEffect(() => {
    const filmesFiltrados = filmes.filter((filme) => {
      return filme.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    })
    setFilmesFiltrados(filmesFiltrados)
  }, [inputValue, filmes])

  return (
    <>
    <MainTitle content="Busca" />
    <Input placeholder="digite o nome do filme" handleChange={handleChange}/> 
    {inputValue && filmesFiltrados.map((filme) => {
      return (
        <Card
        key={filme.id}
        image={filme.image} 
        altText={filme.title} 
        title ={filme.title} 
        subtitle={filme.original_title} 
        />
      )
    })}
    </>
  )
}

export default App
