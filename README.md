<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# On23-TodasEmTech-Santander-ReactJS-II

Esta é a 14ª semana da turma online: Todas em Tech 0n23 - Front-end, nesta aula do dia 24/06/2023 teremos os seguintes conteúdos:

  - [1. Eventos]()
  - [2. Listas e Keys]()
  - [3. Introdução aos Hooks]()
    - [3.1. useState]()
    - [3.2. useEffect]()

## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='Selfie da Lilit com cabelos cacheados longos pretos, com o rosto rodeado por bolinhas predominantemente roxas'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam, estudante de Analise e Desenvolvimento de Sistemas na Mackenzie;

#### Contatos

- [E-mail](devlilitbandeira@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/Ponyo.webp' width=500 alt='personagem princesa Ponyo do filme e mesmo nome do studio ghibli'>

### Quem são as alunas?

<img src='./assets/ghibligirls.jpeg' width=500 alt='7 personagens femininas do studio ghibli'>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Antes de começar, vamos organizar nosso setup.
  * Fork esse [repositório](https://github.com/reprograma/on23-santander-s9-js-3) 
  * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
  * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
  * Altere as pastas chamadas "nome-aluna" para o seu nome-sobrenome, estes são os únicos locais onde você deve realizar alterações 

# Plano de Aula

## 1. Eventos 
<br>

- Como já vimos, eventos nascem principalmente na interação das pessoas usuárias com nossa aplicação, e os mesmos eventos que já vimos no JavaScript também podemos utilizar no React.

- Vamos explorar os 3 eventos mais utilizados, o `onClick`, `onChange` e o `onSubmit`, existem muitas outras possibilidades que vocês podem ir explorando com o tempo, mas a partir dessa introdução todos os outros serão mais fáceis.

<br>

--- 
## 2. Listas e keys
<br>

Nós vimos que lidar com lista é muito importante quando estudamos JavaScript, aprendemos métodos de iteração e como lidar com `Arrays` que em geral podemos receber do backend, não é tão diferente lidar com listas no React, vamos ver um exemplo:

```js
const ghibli = [
    {
        id: 1,
        title: "Castle in the Sky",
        original_title: "天空の城ラピュタ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"

    },
    {
        id: 2,
        title: "Kiki's Delivery Service",
        original_title: "魔女の宅急便",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg"

    },
    {
        id: 3,
        title: "Princess Mononoke",
        original_title: "もののけ姫",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg"

    },
    {
        id: 4,
        title: "Spirited Away",
        original_title: "千と千尋の神隠し",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
    }

]

export default ghibli
```

Vamos usar os métodos que já conhecemos de iteração de array para popular os dados dos filmes da Ghibli num componente de Cards? O que vamos ver de novo aqui é o conceito de `key`:

```jsx
import ghibli from '../ghibli'

const Cards = () =>{
    return(
        <div className='cards_list'>
            {ghibli.map(filme => 
                <div className='cards'>
                    <img key={filme.id} alt={filme.title} src={filme.image}/>
                    <h1>
                        {filme.title}
                    </h1>
                    <p>
                        {filme.original_title}
                    </p>
                </div>
            )
                
            }
        </div>
    )
}

export default Cards
```
---
## 3. Introdução aos hooks
<br>

- Os hooks foram introduzidos ao React em 2018 junto ao conceito de componentes usando funções, nós temos hooks 'nativos' que já existem no próprio React e são amplamente usados e podemos criar nossos próprios hooks.

- Hooks possuem essa carinha: `**useState**`, `**useEffect**`, `useCallback`, `useMemo`, etc.

- Vamos aprender os dois principais: `**useState**` e `**useEffect**`

> Documentação: https://reactjs.org/docs/hooks-intro.html

### 3.1. State - useState

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 > uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 > uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```

---
### 3.2. UseEffect - Consumindo API em React

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 > uma arrow function que vai determinar a ação do efeito colateral
 > um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

---
# Exercícios 

## [Exercicio para sala](https://github.com/reprograma/reprograma-on23-santander-s14-react-2/tree/main/exercicios/nome-aluna/para-sala)

## [Exercicio para casa](https://github.com/reprograma/reprograma-on23-santander-s14-react-2/tree/main/exercicios/nome-aluna/projeto-casa)

---
# Citação e Agradecimento

<p align="center">
Aula construída a partir das aulas da Simara Conceição 💜
</p>
