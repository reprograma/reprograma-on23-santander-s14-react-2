const InputResult = ({ result }) => {
    return (
        <div>
          <a className="repos_link" href={result.html_url} target="_blank">{result.name}</a>
        </div>
    )
}

export default InputResult