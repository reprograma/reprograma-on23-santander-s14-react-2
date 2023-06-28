import { useState } from "react"

function Contador() {
const [Contador, setContador] = useState(0)

    function sub(){
        setContador(Contador -1)
    }

    function add(){
        setContador(Contador + 1)
    }


    return(
        <div className="Contador">
        <button onClick={sub}>-</button>
        <button onClick={add}>+</button>
        <h1>{Contador}</h1>
    </div>
    )
   
}

export default Contador