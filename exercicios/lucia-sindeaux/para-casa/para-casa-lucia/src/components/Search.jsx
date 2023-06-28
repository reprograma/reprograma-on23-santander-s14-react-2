import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Search = () => {
  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(
          'https://api.github.com/users/LuciaSindeaux/repos'
        );
        setDataFromApi(response.data);
      } catch (error) {
        console.error('Capturei um erro: ' + error);
      }
    }

    getData();
  }, []);

  return (
    <div className='repositories'>
        <ul>
        {dataFromApi.map((repo) => (
          <>
          <h2 key={repo.id}>{repo.name}</h2>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank">Conferir</a>
          </>
        ))}
      </ul>
    </div>
  );

  
};

export default Search;


