import './RepoCard.css'
import starImg from '../../assets/star.png'

const RepoCard = ({ reposData }) => {
  const { id, name, html_url, description, language, stargazers_count} = reposData
  return (
    <div className="repos__card" key={id}>
        <a className="repos__repo-link" href={ html_url } target="_blank">
            <h3 className="repos__repo-name">{ name }</h3>
        </a>
        <p className="repos__repo-description">{ description }</p>
        <div className="repos__repo-details">
            <p className="repo-details__text">{ language }</p>
            <p className="repo-details__text">
                <img src={ starImg } alt="icone estrela dos favoritos"/>
                { stargazers_count }
            </p>
        </div>
    </div>
  )
}

export default RepoCard