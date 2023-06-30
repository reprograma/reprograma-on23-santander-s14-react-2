import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import lili from '../assets/nana.jpeg'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Ana Luiza!" />
      <Text content="Aluna da reprograma e Desempregada" />
      <Image img={lili} altText="foto da nana"/>
    </>
  )
}

export default Bio