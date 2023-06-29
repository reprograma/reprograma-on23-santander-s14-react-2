function ExEventos() {
    
    function clicar() {

    }

    function capturaInput(e) {

    }
    
    return (
        <div className="eventos">
            <input placeholder="Digite um número" onChange={capturaInput}/>
            <button onClick={clicar}>click</button>
        </div>
    )
}

export default ExEventos