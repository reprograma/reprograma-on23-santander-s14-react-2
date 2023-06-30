import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import lili from '../assetsreprograma-on23-santander-s14-react-2\exercicios\nome-aluna\para-casa\desafio-semana\src\assets\img_monica60.png'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Mônica!" />
      <Text content="Sou aluna front end do Reprograma" />
      <Image img={lili} altText="foto da Mônica/>
    </>
  )
}

export default Bio
