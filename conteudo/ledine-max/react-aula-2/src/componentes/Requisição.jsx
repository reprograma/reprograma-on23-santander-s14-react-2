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
        <>
        <p>oioi</p>
        </>
    )
}


export default Filmes