import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import lili from '../assets/lilili.jpeg'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Lilit Bandeira!" />
      <Text content="Ex-aluna reprograma, Engenheira de software na Nubank" />
      <Image img={lili} altText="foto da lili"/>
    </>
  )
}

export default Bio
