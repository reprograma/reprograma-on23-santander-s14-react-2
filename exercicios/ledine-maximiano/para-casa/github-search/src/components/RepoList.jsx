// import InputResult from "./InputResult"

import InputResult from "./InputResult"

const RepoList = ({repositories}) => {
    return (
      <div className="repos_result">
            {
                repositories.map((result, id) => {
                    return <InputResult result={result} key={id} />
                })
            }
      </div>
    )
}

export default RepoList