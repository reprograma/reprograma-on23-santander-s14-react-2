function ExemploEventos () {

    function clicks(e){
        console.log('foi clicado')
    }

    function capturarInput(e){
        console.log(e.target.value)
    }

    return(
        <div className="eventos">
            <input placeholder="Digite um número" onChange={capturarInput}/>
            <button onClick={clicks}> clique aqui</button>
        </div>
    )
}

export default ExemploEventos