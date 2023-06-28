import React, { useState } from "react";
// import Button from './Button'

function Input({ setRepos }) {
  const [input, setInput] = useState("")

  const ReposURL = (value) => {
    fetch('https://api.github.com/users/ledinemax/repos')
    .then((response) => response.json()).then((json) => {

        const getRepos = json.filter((repos) => {
          return value && repos && repos.name && repos.name.toLowerCase().includes(value)
        })
        setRepos(getRepos)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    ReposURL(value)
  }

  return (
    <div className="inputBar">
      <input placeholder="Nome do repositório..."
        value={input}
        onChange={(e) => handleChange(e.target.value)} />
      {/* <Button /> */}
    </div>
  )
}

export default Input

