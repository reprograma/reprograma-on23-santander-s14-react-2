import Subtitle from './Subtitle'
import Text from './Text'
import Image from './Image'

import naira from '../assets/eu.jpeg'

const Bio = () => {
  return (
    <>
      <Subtitle content="Prazer, Náira Nogueira" />
      <Text content="Aluna de Front-End pela Reprograma." />
      <Image img={naira} altText="foto da naira"/>
    </>
  )
}

export default Bio