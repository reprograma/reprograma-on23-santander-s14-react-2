import Subtitle from "./Subtitle"
import Text from "./Text"
import Image from "./Image"

import kelly from '../assets/kelly.jpg'

const Bio = () => {
  return (
   
    <>
        <Subtitle content="Prazer Kelly Oliveira!"/>
        <Text content="Aluna Reprograma, em transição de carreira"/>
        <Image img={kelly} altText="foto da Kelly"/>
    </>
  )
}

export default Bio