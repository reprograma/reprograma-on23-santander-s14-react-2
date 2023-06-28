import { useEffect, useState } from 'react';
import Axios from 'axios';
// import Input from "./Input"
// import Button from "./Button"



const Search = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getRepo() {
      try {
        const response = await Axios.get(
          'https://api.github.com/users/angelicaclaudino/repos'
        );
        setRepo(response.data);
      } catch (error) {
        console.error('Capturei um erro: ' + error);
      }
    }

    getRepo();
  }, []);

  return (
    <div className='repositorios'>
        <h3>Meus repositórios:</h3>
        <ul>
        {repo.map((repo) => (
          <>
            <a href={repo.html_url} target="_blank">
                <h2 key={repo.id}>{repo.name}</h2>
            </a>               
          </>
        ))}
      </ul>
    </div>
  );


};

export default Search;
