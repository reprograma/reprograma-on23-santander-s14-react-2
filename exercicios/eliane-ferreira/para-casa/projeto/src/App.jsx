import { useState } from 'react'
import Axios from 'axios'
import './App.css'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Image from '../components/Image'
import Header from '../components/Header'
import Bio from '../components/Bio'
import footer from '../components/Footer'
import Seach from '../components/Seach'
import Button from '../components/Button'
import Input from '../components/Input'

import saneli from '../src/assets/Elianeferreira.jpg' 

function App() {
  
  return (

    <div>
    <Title text={"Meu {Github Search"}/>
    <Subtitle text={"Olá eu sou Eliane!"}/>
    <Text text={`Assistente administrativa e a procura de novas oportunidades, aluna {reprograma} da turma de Front-end. 
    o contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,
    suas raízes podem ser encontradas llege na Virginia, pesquisou uma das mais obscuras palavras em latim, 
    consectetur, oriunda de uma passagem d`}/>
    <Image img={saneli} description="Eliane kkkkkkkkkk"/>
    <Seach />
    
    </div>
  )
}

 export default App
  