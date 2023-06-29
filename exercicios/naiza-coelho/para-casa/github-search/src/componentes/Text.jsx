function Text(props) {
    return (
        <>
        <p className={props.class}>{props.children}</p>
        </>
    )
}

export default Text;