function ExemploEventos() {

  function clicar() {
    console.log('foi clicado')
  }

  function capturaInput(e) {
    console.log(e.target.value)
  }

  return (
    <div className="eventos">
      <input placeholder="Digite um número" onChange={capturaInput}/>
      <button onClick={clicar}>click</button>
    </div>
  )
}

export default ExemploEventos
