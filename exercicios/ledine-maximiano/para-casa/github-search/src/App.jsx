import { useState } from 'react'
import './App.css'
import Axios from 'axios'
import Header from './components/Header'
import Subtext from './components/Subtext'
import Input from './Search'
import Footer from './components/Footer'

function App() {
  const handleChange = (e) => setInputValue(e.target.value)

  return (
    <>
    <Header />
    <Subtext/>
    <Input placeholder="nome do repositório" handleChange={handleChange}/>
    <Footer/>
    </>

  )
}

export default App
