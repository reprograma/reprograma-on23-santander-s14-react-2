import Header from './components/Header'
import Bio from './components/Bio'
import Search from './components/Search'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Image from './components/Image'


import profileImage from './imagens/luciaSimba.jpeg'
import logoGithub from './imagens/GithubSearch.png' 

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Search />
      <Footer />
      <Logo image={logoGithub} />
      <Image image={profileImage} />
            
    </div>
  )
}

export default App
