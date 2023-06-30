import filmes from '../data/ghibili'



function CardsGhibili() {
    return(
    <div className="cards-box">
      {filmes.map((filme) => {
        return(
            <div key={filme.id} className={`card`}>
                <img src = {filme.image} alt={filme.title}/>
                <h2> {filme.title} </h2>
                <p> {filme.original_title}</p>

            </div>
        )
      })}
    </div>
    )
    
}

export default CardsGhibili