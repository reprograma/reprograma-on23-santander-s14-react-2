import { useState, useEffect } from "react"
import Axios from 'axios'

 function Users(){
    const [users, setUsers] = useState([])
    const url = 'https://api.github.com/users'

    useEffect(() => {
        async function getUsers(){
                const response = await Axios.get(url)
                setUsers(response.data)
        }
        getUsers()
        }, [])

        return(
           <div className="users">
                {users.map((user)=>{
                    return(
                        <div key={user.id} className="user-card">
                            <a href={user.repos_url}>
                                <img src={user.avatar_url} alt="foto da usuária" />
                            </a>
                            <h2>{user.name}</h2>
                            <h3>{user.login}</h3>
                            <p>{user.bio}</p>
                        </div>
                    )
                    })}            
            </div>
            )      
        }

    export default Users