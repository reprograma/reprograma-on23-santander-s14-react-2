const Button = ({content, handClick}) => {
    return (
        <button onClick={handClick}>{content}</button>
    )
}

export default Button