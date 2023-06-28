import { useState } from 'react'
import Axios from 'axios'
import './App.css'

import Header from '../src/componentes/Header'
import Bio from '../src/componentes/Bio'
import Input from './componentes/Input'
import Button from './componentes/Button'


function App() {

  const [repositorio, setRepositorios] = useState({})
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/FrancieleCsantos`)
      setRepositorios(response.data)
      console.log(response.data)

    } catch (error) {
      console.error("Ops, capturei um erro" + error)
    }

  }
  return (
    <>
      <div>
        <Header />
        <Bio />
        <Input placeholder="Realizar busca" onChange={handleChange} />
        <Button onClick={handleClick} content={"Pesquisar"} />
      </div>

    </>
  )
}

export default App
