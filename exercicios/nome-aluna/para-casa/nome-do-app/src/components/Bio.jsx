import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import nicki from '../assets/nicki.jpeg'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Nicole Guedes!" />
      <Text content="Aluna da reprograma" />
      <Image img={nicki} altText="foto da nicki"/>
    </>
  )
}

export default Bio