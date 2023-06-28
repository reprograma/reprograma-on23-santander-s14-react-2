import Header from './components/Header'
import Bio from './components/Bio'
import Search from './components/Search'
import Footer from './components/Footer'
import Input from './components/Input'
import Image from './components/Image'
import foto from './assets/Angel.jpg'
import { useState } from 'react'



import './App.css'

function App() {

  const [repo, setRepo] = useState({})
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/angelicaclaudino/repos`)
        setRepo(response.data)
      }
    
    catch(err) {
      console.error("Erro capturado: " + err)
        
    } 
  };

  return (
    <div className="App">
      <Header text="Meu Github Search"/>
      <Bio 
           text="Oieee! Sou Angélica Claudino." 
           descricao="Estudante de FrontEnd, atualmente atuo com suporte a sistemas de informação. Sou apaixonada por informática." 
           image={foto}
      />
      <Input placeholder="Localize um repo" onChange={handleChange} />
        {repo.message ?
        <Text content={repo.message} />
        : 
        <>
          <Search />
          <Footer />
        </>
      }

    </div>
  )
}

export default App
