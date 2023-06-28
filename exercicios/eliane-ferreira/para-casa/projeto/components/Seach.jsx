import { useState, useEffect } from 'react'
import Axios from 'axios'


function Repositorios () {
  const [repositorios, setRepositorios] = useState ([])
  const [inputValue, setInputValue] = useState("") 
  
  const url = 'https://api.github.com/users/elianeferreira/repos´

   userEffect(() => {
    async function getrepositorios() {
         try {
            const response = await Axios.get(url)
            setRepositorios(response.data)
            console.log (url)
         }

         catch(err){
            console.error("Erro capturado: "+ err) 
            setRepositorios({mensagem: " repositorio incompleto"})
        }
      
 }

   getRepositorios
 
},[])
       
    return (
  <div>
    {repositorio &&

  <>
  <p>{repositorio.name}<p/>
  <p>{repositorio.description}<p/>
  </>
    }
    </div>
    )    
 }

export default Seach