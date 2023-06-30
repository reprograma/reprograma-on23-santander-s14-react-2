const Image = (props) => {
    return (
      <a href="#" onclick="window.location.href='https://github.com/${login}'" target ="_blank">
        <img className={props.class} src={props.image}/>
      </a>
    // Deveria direcionar para o github da usuária, mas não vai.  
    )
}

export default Image;

