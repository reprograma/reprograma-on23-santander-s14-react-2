import { useState, useEffect } from 'react'
import Axios from 'axios'

function Filmes() {
  const [filmes, setFilmes] = useState([])
  const url = 'https://ghibliapi.vercel.app/films'

  useEffect(() => {
    async function getFilmes() {
      const response = await Axios.get(url)
      setFilmes(response.data)
    }
    getFilmes()
  }, [])

  return (
    <div className="cards"> 
      {filmes.map((filme) => {
        return (
          <div key={filme.id}>
            <img src={filme.image} alt={filme.title} />
            <h1>{filme.title}</h1>
            <p>{filme.original_title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Filmes 
