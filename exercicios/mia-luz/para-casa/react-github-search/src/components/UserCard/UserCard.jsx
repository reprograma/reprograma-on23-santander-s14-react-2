import './UserCard.css'
import { useEffect, useState } from 'react'
import  Axios  from 'axios'

import followersImg from '../../assets/people_outline.png'
import reposImg from '../../assets/Vector.png'


const UserCard = ({ userData, handleClick }) => {
    // const [userData, setuserData] = useState(null);
    
    // useEffect(async function getUser(){
    //     try {
    //         const response = await Axios.get(`https://api.github.com/users/${username}`) 
            
    //         setuserData(response.data)
            
    //       } catch (error) {
    //         console.error('error captured' + error)
    //       }
    //       getUser()
    // }, [username]);


  return (
         <section className="user-card__container" id="card-container">
            <a href={userData.html_url} target="_blank">
                <img className="user-card__img"src={userData.avatar_url}
                alt={`foto da usuaria do github ${userData.login}`}/>     
            </a>

            <a href='' target="_blank" className="user-card__name">
                <h2>{userData.name}</h2>
            </a>

            <h4 className="user-card__username">{userData.login}</h4>
            <p className="user-card__bio">{userData.bio}</p>

            <div className="info-icons__container">

                <div className="info-icons__icon">
                    <img src={ followersImg } alt="icon followers"/>
                    <p className="info-icons__number">{userData.followers}</p>
                </div>

                <div className="info-icons__icon" onClick={handleClick}>
                    <img src={reposImg} alt="icon repos"/>
                    <p className="info-icons__number">{userData.public_repos}</p>
                </div>

            </div> 
        </section>
  )
}

export default UserCard