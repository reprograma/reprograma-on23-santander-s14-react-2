import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import taii from '../assets/taii.jpg'

function Bio() {
  return (
    <div className="card">
      <Title text="Oi oi Tainã por aqui"/>
      <Text text="Aluna Reprograma, apaixonada pelo melhor bootcamp, família, amigos e gatinhos"/>
      <Image img={taii} description="Foto de Tainã"/>
    </div>
  )
  }

export default Bio