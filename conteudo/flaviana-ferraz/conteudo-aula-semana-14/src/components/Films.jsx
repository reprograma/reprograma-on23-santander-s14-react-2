import { useState, useEffect } from "react";
import Axios from 'axios'

function Films (){
    const [films, setFilms] = useState([])
    const url = 'https://ghibliapi.vercel.app/films'

    useEffect(()=> {
        async function getFilms(){
            const response = await Axios.get(url)
            setFilms(response.data)
        }
        getFilms()
    }, [])

    return(
        <div className="cards">
            {films.map((film)=>{
                return(
                    <div key={film.id}>
                        <img src={film.image} alt={film.title} />
                        <h1>{film.title}</h1>
                        <p>{film.original_title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Films