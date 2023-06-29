
import './App.css'
import { useState, useEffect} from 'react'
import Axios from 'axios'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Header from './components/Header'
import Input from './components/Input'
import Repos from './components/repos'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Text from './components/Text'

function App() {
    const[inputValue, setInputValue] = useState('')
    const[repos, setRepos] = useState([])
    const[repoFilter, setRepoFilter] = useState([])

    function handleChange(e){
        setInputValue(e.target.value)
    }

    useEffect(() => {
        async function getRepositories(){
            const response = await Axios.get('https://api.github.com/users/flavianafxt/repos')
            setRepos(response.data)
            console.log(response.data)
        } 
        getRepositories()
     }, [])
    
     useEffect(() => {
        const repoFilter = repos.filter((repo) => {
            return repo.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setRepoFilter(repoFilter)
     }, [inputValue, repos])

  return (
    <>
      <Header/>
      <Title className="principal_title" content="Meu GitHub Search"/>
      <Bio />
      <div className='repos'>
          <Title content="Meus Repositórios Públicos" />
          <Input placeholder="Digite o repositório" className="search_repos" handleChange={handleChange}/>
          {inputValue&&repoFilter.map((repo) => {
              return(
                <div key={repo} className="repo-search">
                  <Subtitle className="repo-search-text" content={repo.name}/>
                  <Text className="repo-search-text"  description = {repo.description}/>
                  <div className="language">
                        <Text className="language-text" description="Linguagem: "/>
                        <Text className="repository-text" description = {repo.language ? repo.language:"-"}/>
                    </div>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" ><Text className="repo-search-text" description = "Acesse o repositório" /></a>
                </div>
                  )
              })}
      </div>
    
      
      <div className="cards-repos">
        <Repos/> 
      </div>
      
      <Footer/>
    </>
  )
}

export default App
