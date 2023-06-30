import { useState } from 'react'

function Contador() {
    const [contador, setcontador] = useState(0)
    function subtrair() {
        setcontador(contador - 1)
    }

    function somar() {
        setcontador(contador + 1)
    }


    return (
        <div className="contador">
            <button onClick={subtrair}>-</button>
            <button onClick={somar}>+</button>
            <h1>{contador}</h1>
        </div>

    )
}

export default Contador