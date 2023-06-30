import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import SubTitle from "../children_components/Subtitle";
import Text from "../children_components/Text";
import Axios from "axios";
import "./Search.css"

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [reposFromApi, setReposApi] = useState([]);
  const [reposFiltered, setReposFiltered] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(
          "https://api.github.com/users/isamoreira/repos"
        );
        setReposApi(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const filteredRepos = reposFromApi.filter((repo) =>
      repo.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setReposFiltered(filteredRepos);
  }, [inputValue, reposFromApi]);

  return (
    <>
      <input
        className="input"
        placeholder="Busque um repositório"
        onChange={handleChange}
        value={inputValue}
      />
      {inputValue &&
        reposFiltered.map((repo) => (
          <div className="Card" key={repo.id}>
            <SubTitle content={repo.name} />
            <Text content={repo.description} />
            <a href={repo.html_url} target="_blank">
              <GoArrowRight />
            </a>
          </div>
        ))}
    </>
  );
};

export default Search;

