import  Header  from './componentes/Header'
import  Bio from './layouts/Bio'
import  Search  from './layouts/Search'
import  Footer  from './componentes/Footer'
import Title from './componentes/Title'



function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />

      <Bio text = "Me chamo Mônica, tenho 27 anos e atualmente estudo programação pela Reprograma. Estou em transição de carreira, a primeira formação é relacionada área de educação" />

      <Search text = "Meus hobbys preferidos são: assistir filmes, cozinhar, comer (rsrs), passear e fazer caminhada" />

      <Footer content="Feito com ♡ por Mônica. E todos os direitos são reservados." />
    </div>
  )
}

export default App
