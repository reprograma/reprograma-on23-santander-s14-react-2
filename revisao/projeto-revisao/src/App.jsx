import { useState } from 'react'
import Axios from 'axios'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Image from './components/Image'
import Text from './components/Text'

import ponyo from './assets/Ponyo.webp'

function App() {
  const [endereco, setEndereco] = useState({})
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = async () => {
    try {
      const response = await Axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
      if(response.data.erro == true) {
        setEndereco({message: "endereço não encontrado"})
      } else {
        setEndereco(response.data)
      }
    }
    catch(err) {
      console.error("Erro capturado: " + err)
    } 
  };

  return(
  <div className='container'>
    <Image img={ponyo} />
    <Input placeholder="Digite o CEP" onChange={handleChange} />
    <Button onClick={handleClick} content="Buscar" />
   {endereco.message ?
    <Text content={endereco.message} />
   :
   <> 
    <Text content={endereco.cep} />
    <Text content={endereco.logradouro} />
    <Text content={endereco.bairro} />
    <Text content={endereco.localidade} />
    <Text content={endereco.uf} />
   </> 
   }
  </div>
  )
}

export default App
