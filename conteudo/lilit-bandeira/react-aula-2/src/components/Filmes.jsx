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
      {filmes.map((repos) => {
        return (
          <div key={repos.id}>
            <img src={repos.image} alt={filme.title} />
            <h1>{repos.title}</h1>
            <p>{repos.original_title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Filmes 
