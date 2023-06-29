import './App.css'
import { useState } from 'react'
import Statics from './components/Statics'
import Input from './components/Input'
import RepoList from './components/RepoList'
import Footer from './components/Footer'

function App() {
  const [repositories, setRepos] = useState([])

  return (
    <>
    <Statics/>
    <Input setRepos={setRepos}/>
    <RepoList repositories={repositories}/>
    <Footer />
    </>

  )
}

export default App
