import Subtitle from "./Subtitle"
import Text from "./Text"

const RepoCard = (repository) => {
    return(
        <div key={repository} className="repository">
                <Subtitle className="repository-title" content={repository.name}/>
                <Text className="repository-description" description = {repository.description}/>
                <Text className="repository-text" description = {repository.language ? repository.language:""}/>
                <a href={repository.html_url} target="_blank" rel="noreferrer" ><Text className="repository-link" description = "Acesse o repositório" /></a>
        </div>
    )
}

export default RepoCard