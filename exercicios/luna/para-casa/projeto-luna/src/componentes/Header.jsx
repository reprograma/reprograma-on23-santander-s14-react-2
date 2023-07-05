const Header = () => {
    const redirectToHome = () => {
      window.location.href = "index.html";
    };
  
    return (
      <header className="superTitle">
        <h1 onClick={redirectToHome}>Meu GitHub Search</h1>
      </header>
    );
  };
  
  export default Header;
  