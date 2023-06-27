import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    function subtract(){
        setCount(count - 1)
    }

    function add(){
        setCount(count + 1)
    }
    
    return (
        <div className="counter">
            <button onClick={subtract}> - </button>
            <button onClick={add}> + </button>
            <h1>Contador</h1>
        </div>
    )
}

export default Counter