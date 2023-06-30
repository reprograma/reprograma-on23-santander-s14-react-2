import {MdPersonSearch} from 'react-icons/md'


function Search({handleClick, handleChange}) {
    return (
        <>
            <form className="search">
                <input type="text" className="search-input" placeholder="Digite o nome do repositório" onChange={handleChange} />
                    <button type="submit" className="search-button" onClick={handleClick}>
                        <MdPersonSearch color='black'fontSize='17px'/>

                    </button>
            </form>
        </>
    )
}

export default Search;