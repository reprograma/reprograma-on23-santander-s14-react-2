# Exercício de Casa 🏠 

## Projeto da semana

Vamos iniciar um projetinho react do zero com direito a consumo de API, eventos e hooks.

O Projetinho será: "Meu github search"
E deverá conter os componentes como descrito abaixo.

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu site](https://projetinho-react3.netlify.app/) 

> O que deve ser feito:
1) Crie um projeto react com vite
2) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu nas últimas aulas. 
3) Atenção! A entrega deverá ser feita pelo classroom e será o link do seu repositório. Arraseee! E qualquer coisa, me chama!

# Dependências
>> utilizar o npm para instalar no projeto
react-icons (incluir ícones no projeto)
axios (para consumir api)

# Componentes maiores
>> componentes que usam os componentes menores recebendos os conteúdos por props

* Bio 
* Search (atenção pois aqui recebemos os dados consumindo da API do github e fazemos a busca)

# Componentes menores

> somente o esqueleto, os conteúdos serão inclusos por props

* Title 
* Subtitle
* Text
* Image
* Header
* Footer

# Estrutura do App

> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Search } from './components/Search'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App

```
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
