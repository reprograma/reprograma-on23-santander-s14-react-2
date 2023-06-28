import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(50)
  const nome = "Manu"
  function subtrair() {
    setContador(contador - 1)
  }

  function somar() {
    setContador(contador + 1)
  }
  
  return (
    <div className="contador">
      <button onClick={subtrair}> - </button>
      <button onClick={somar}> + </button>
      <h1>{contador}</h1>
    </div>
  )
}

export default Contador
