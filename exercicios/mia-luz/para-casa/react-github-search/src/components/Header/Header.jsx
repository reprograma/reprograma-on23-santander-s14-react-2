import './Header.css'
import lupaImg from '../../assets/lupa.png'
import logo from '../../assets/GithubSearch.png'
import { useState } from 'react';

const Header = ({ handleChange, handleClick }) => {
  const [nightModeButtonContent, setnightModeButtonContent] = useState('☀️');
  const [isNightModeEnabled, setisNightModeEnabled] = useState(false);


  const enableNightMode = () => {

      if(isNightModeEnabled === true){
          setnightModeButtonContent('☀️')
          document.documentElement.style.setProperty('--primary', '#ec9b69')
          document.documentElement.style.setProperty('--main-backgroundcolor', '#f8f8f8')
          document.documentElement.style.setProperty('--second-backgroundcolor', '#ffffff')
          document.documentElement.style.setProperty('--text-color', '#959595')

         setisNightModeEnabled(false)

      }else{
      
         setnightModeButtonContent('🌙')

          document.documentElement.style.setProperty('--primary', '#A31ACB')
          document.documentElement.style.setProperty('--main-backgroundcolor', '#371B58')
          document.documentElement.style.setProperty('--second-backgroundcolor', '#4b207d')
          document.documentElement.style.setProperty('--text-color', '#b38de8')
          
          setisNightModeEnabled(true)

      }

  }


  return (
    <header className="header__container">
        <a href="/">
        <img className="header__logo" src={ logo } alt="GithubSearch logo"/>
        </a>

        <div className="header__iteractive">

            <form className="header__form">
                <input type="text" className="form__input" id="search-input" placeholder="Digite a usuária..." onChange={handleChange}/>
                <button className="form__search-button" id="search-button" type="submit" onClick={handleClick}>
                    <img src={ lupaImg } alt="botao pesquisar"/>
                </button>
            </form>

            <button className="header__night-mode-button" onClick={ enableNightMode } type="button"
           
            >{ nightModeButtonContent }</button>
        </div>
    </header>
  )
}

export default Header