
import './App.css'
import Axios from 'axios'

import MainTitle from './components/MainTitle'
import Input from './components/Input'
import { useEffect, useState } from 'react'
import Card from './components/Card'


function App() {
  const[inputValue, setInputValue] = useState('')
  const [films, setFilms] = useState([])
  const [filterFilms, setFilterFilms] = useState([])
 

 const handleChange = (e) =>  setInputValue(e.target.value)

  useEffect(() => {
    async function getFilmes() {
    try {
      const response = await Axios.get('https://ghibliapi.vercel.app/films')
      setFilms(response.data)
    }
    catch(erro) {
      console.error("Capturei um erro: " + erro)
    }
  }
  getFilmes()
}, [])

useEffect(() => {
  const filterFilms = films.filter((film) => {
    return film.title.toLowerCase().includes(inputValue.toLowerCase())
  })
  setFilterFilms(filterFilms)
}, [inputValue, films])


  return (
    <>
      <MainTitle container="Busca"/>
      <Input placeholder="Digite o nome do filme" handleChange={handleChange}/>
      {inputValue && filterFilms.map((film) => {
        return(
          <Card 
          key={film.id} 
          image={film.image} 
          altText={film.title} 
          title={film.title} 
          subtitle={film.original_title}/>
        )
      })}
    </>
  )
}

export default App
