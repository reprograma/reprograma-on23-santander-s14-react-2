import Header from './components/Header'
import Bio from './components/Bio'
import Search from './components/Search'
import Footer from './components/Footer'
import foto from './assets/Angel.jpg'

import './App.css'

function App() {

   return (
    <div className="App">
      <Header text="Meu Github Search"/>
      <Bio 
           text="Oieee! Sou Angélica Claudino." 
           descricao="Estudante de FrontEnd, atualmente atuo com suporte a sistemas de informação. Sou apaixonada por informática." 
           image={foto}
      />
      <Search />
      <Footer/>

    </div>
  )
}

export default App
