// import { useState } from 'react'
// import Axios from 'axios'
import './App.css'

import Header from '../src/componentes/Header'
import Bio from '../src/componentes/Bio'
import Buscar from './componentes/Buscar'


function App() {

  return (
    <div className='container'>
      <Header />
      <Bio />
      <Buscar />
    </div>
  )


}

export default App
