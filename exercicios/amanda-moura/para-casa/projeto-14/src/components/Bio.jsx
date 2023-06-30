import Subtitle from './Subtitle'
import Text  from './Text'
import Image from './Image'

import amandinha from '../assets/amandinha.jpeg'

export const Bio = () => {
  return (
    <>
    <Subtitle content ="Prazer, Amanda Falida" />
    <Text content="Reprograma lover, gateira e crossfiteira"/>
    <Image img={amandinha} altText="foto amandinha" />
    </>
  )
}


export default Bio

