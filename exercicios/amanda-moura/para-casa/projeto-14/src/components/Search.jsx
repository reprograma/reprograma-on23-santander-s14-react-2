import { useEffect, useState } from "react";
import Axios from 'axios';
import Subtitle from './Subtitle';
import Text from './Text';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [reposFromApi, setRepos] = useState([]);
  const [reposFiltered, setReposFiltered] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get('https://api.github.com/users/amanddmouraz/repos');
        setRepos(response.data);
      } catch (err) {
        console.error("Erro capturado:" + err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const filteredRepos = reposFromApi.filter((repo) => {
      return repo.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setReposFiltered(filteredRepos);
  }, [inputValue, reposFromApi]);

  return (
    <>
      <input
        placeholder="Digite um repositório"
        onChange={handleChange}
      />
      {inputValue && reposFiltered.map(repo => {
        return (
          <div key={repo.id} className="card">
            <Subtitle content={repo.name} />
            <Text context={repo.description} />
            <a className="img" href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Conferir
            </a>
          </div>
        )
      })}
    </>
  );
}

export default Search;