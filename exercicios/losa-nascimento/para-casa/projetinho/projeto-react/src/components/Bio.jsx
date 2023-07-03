import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import losa from '../assets/losa.JPG'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Losa Nascimento!" />
      <Text content="Aluna reprograma em formação para front-end." />
      <Image img={losa} altText="foto da losa"/>
    </>
  )
}

export default Bio