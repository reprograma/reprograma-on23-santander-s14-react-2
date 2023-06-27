import { useEffect, useState } from 'react'
import Axios from 'axios'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RepoCard from './components/RepoCard/RepoCard'
import UserCard from './components/UserCard/UserCard'

import './App.css'
import NoReposError from './components/NoReposError/NoReposError'
import UserNotFoundError from './components/UserNotFoundError/UserNotFoundError'

function App() {
  const [userData, setuserData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [reposData, setReposData] = useState(null);
  const [status, setstatus] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)

  }

  const handleSearchClick = async (e) => {
    e.preventDefault()
    setuserData(null)
    setReposData(null)

    try {
      const response = await Axios.get(`https://api.github.com/users/${inputValue}`) 
      
      setuserData(response.data)
      
      setstatus(response.status)
      console.log(response)
      
    } catch (error) {
      console.error('error captured: ' + error)
      setstatus(404)
    }
  }

  const handleGetReposClick = async () => {
    setReposData(null)
    
    try {
      const response = await Axios.get(`https://api.github.com/users/${userData.login}/repos`) 
      
      setReposData(response.data)
      console.log(response.data)

      
    } catch (error) {
      console.error('error captured' + error)

    }
  }
  

  return (
    <>
     <Header 
     handleChange={handleChange} 
     handleClick={handleSearchClick}

     />

     <main className="main__container">

      {userData ? 
          <UserCard userData={userData} handleClick={handleGetReposClick} />
      : status === 404 && <UserNotFoundError />}

      {reposData && reposData.length >=1 ? 

          <section className="repos__container">
            {reposData.map((repo) => <RepoCard reposData={repo} key={repo.id}/> )}
          </section> 

          : reposData && <NoReposError userData={userData}/> }
      


     </main>

    <Footer />
    </>
  )
}

export default App
