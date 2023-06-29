import Axios from 'axios'
import { useState, useEffect } from 'react'
import Subtitle from '../Subtitle'
import Text from '../Text'
import PeopleIcon from '../assets/people_outline.png'
import ReposIcon from '../assets/Vector.png' 

const GetGithubUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUser(){
            const response = await Axios.get(`https://api.github.com/users/${user}`)
            setUsers(response.data)
        }
        getUser()
    }, [])

    return(
        <div className='cardUser'>
            {users.map((user) => {
                const {html_url, avatar_url, name, login, bio, followers, public_repos} = user
                return(
                    <div key={id}>
                        <a href={html_url} target="_blank">
                            <img className="profile-img" src={avatar_url} alt={`foto da usuária ${name}`} />
                        </a>
                        <Subtitle className="profile-title" content = {name ? name:""} />
                        <h4 className="profile-subtitle">{login ? login:""}</h4>
                        <Text className="profile-description" description = {bio ? bio:""} />
                        <div className="profile-infos">
                            <div className="box-icons">
                                <img src={PeopleIcon} className="box-icon" />
                                <Text className="box-text" description = {followers} />
                            </div>
                            <div className="box-icons">
                                <img src={ReposIcon} className="box-icon" />
                                <Text className="box-text" description = {public_repos} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  
}

export default GetGithubUser