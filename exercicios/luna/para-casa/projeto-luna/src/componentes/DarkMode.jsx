import React from 'react';

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
    return ( 
        <div className="dark-mode-container">
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
        </div>
  );
}
 
export default DarkMode;