import filmes from '../data/ghibli'

function Cards() {
 return (
  <div className="cards_container">
    {filmes.map((filme) => {
      return (
        <div key={filme.id} className={`card`}>
          <img src={filme.image} alt={filme.title} />
          <h2>{filme.title}</h2>
          <p>{filme.original_title}</p>
        </div>
      )
    })}
  </div>
 )
}

export default Cards
