import Title from './Title';
import Image from './Image';
import logoGithub from '../assets/GithubSearch.png'
import Search from './Search';
function Header({ handleClick, handleChange }) {

    return (
        <>
            <header className='header'>
                <div>
                    <Image image={logoGithub}></Image>
                </div>

                <Search handleClick={handleClick} handleChange={handleChange}></Search>
            </header>
        </>

    )
}

export default Header;