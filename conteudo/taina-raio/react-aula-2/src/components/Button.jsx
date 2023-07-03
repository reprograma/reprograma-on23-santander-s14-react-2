const Button = ({content, handleClick}) => {
  return (
    <button onClick={handleClick}>{content}</button>
  )
}

export default Button
