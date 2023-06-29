import './App.css'
import Header from './componentes/Header'
import Bio from './componentes/Bio'
import Search from './componentes/Search'
import Footer from './componentes/Footer'
import Image from './componentes/Image'
import React, { useState, useEffect } from 'react';
import DarkMode from './componentes/DarkMode'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);



  return (
    <>
       <Header />
       <Bio />
       <Search />
       <Footer name="cyberlua" />
       <Image />
       <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

    </>

  )
}

export default App;
