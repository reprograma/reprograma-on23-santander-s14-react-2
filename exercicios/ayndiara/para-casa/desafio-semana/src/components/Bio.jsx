import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import lili from '../assets/ayndiaramiranda.jpeg'


const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Ayndiara!" />
      <Text content="Aluna reprograma 2023.1, sou formada em direito e estou em transição de carreira desde outubro de 2022" />
      <Image img={lili} altText="foto da Ayndiara"/>
    </>
  )
}

export default Bio
