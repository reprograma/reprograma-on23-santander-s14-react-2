import React from 'react'
import Header from "./children_components/Header"
import Bio from "./components/Bio"
import Footer from './children_components/Footer'
import './App.css' 
import Search from './components/Search'

 function App() { 
     return ( 
         <div className="App">
            <Header content="Meu github search" /> 
            <Bio />
            <Search />
            <Footer content="Feito com ♡ por Isabella Moreira. Todos os direitos reservados." />
      

        </div>
) 
} 

 export default App
