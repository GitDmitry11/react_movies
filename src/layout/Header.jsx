function Header() {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="https://gitdmitry11.github.io/react_movies/" className="brand-logo" >
          Your Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/GitDmitry11/react_movies">Repo</a>
          </li> 
        </ul>
      </div>
    </nav>
  );
}

export { Header };
