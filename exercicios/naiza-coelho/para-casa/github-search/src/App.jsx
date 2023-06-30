import { useState, useEffect } from 'react'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Card from './componentes/Card'
import './App.css'
import Bio from './componentes/Bio'
import Axios from 'axios'
import Title from './componentes/Title'

function App() {
  const [repoData, setRepoData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filterRepos, setFilterRepos] = useState([])

  function handleChange(event) {
    setInputValue(event.target.value)

    
  }


  function handleClick(event) {
    event.preventDefault()
    const repoFiltrados = repoData.filter((repo) => {
      return repo.full_name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilterRepos(repoFiltrados)

  }

  useEffect(() => {
    async function getRepositories() {
      try {
        const response = await Axios.get('https://api.github.com/users/naizacoelho/repos')
        setRepoData(response.data)
      }
      catch (erro) {
        console.error("Capturei um erro: " + erro)
      }
    }
    getRepositories()
  }, [])

  return (
    <>
      <Header handleChange={handleChange} handleClick={handleClick}></Header>
      <main>
        <div className='bio-container'>
          <Bio></Bio>
        </div>

        <div className='list-container'>
          
          { filterRepos.length > 0 ?
          filterRepos.map((repo) => {

            return (
              <Card
                id={repo.id}
                link={repo.html_url}
                linguagem={repo.language}
                titulo={repo.full_name}
                descricao={repo.description}
              />
            )
          }) : 
          <Title text="Nenhum repositório encontrado"></Title>
        } 

        </div>


      </main>

      <Footer></Footer>
    </>
  )
}

export default App
