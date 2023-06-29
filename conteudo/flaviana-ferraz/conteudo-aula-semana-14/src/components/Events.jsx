function Events(){

    function inputCapture(event){
        console.log(event.target.value)
    }

    function click(){
        console.log('foi clicado!')
    }
    
    return(
        <div className="events">
            <input placeholder="Digite o que deseja pesquisar" onChange={inputCapture} />
            <button onClick={click}>click</button>
        </div>
    )
}

export default Events