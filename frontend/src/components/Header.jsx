import { useState } from "react";
  import { Link } from "react-router-dom";
  
  import logo from "../assets/colonne.png";
  import navigationIcon from "../assets/barre-de-menu.png";
  
  import "../styles/Header.css";
  
  function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const openNav = () => {
      setIsNavOpen(true);
    };
  
    const closeNav = () => {
      setIsNavOpen(false);
    };
  
    return (
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="logo" />
            <h1>Bath Gate</h1>
            <div className="desktopNav">
              <ul>
                <Link to="/">
                  <li>Catalog</li>
                </Link>
                <Link to="/Cart">
                  <li>Cart</li>
                </Link>
              </ul>
            </div>
          </div>
          <nav>
            <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
              <button
                type="button"
                id="closeBtn"
                href="#"
                className="close"
                onClick={closeNav}
              >
                &times;
              </button>
              <ul>
                <Link to="/">
                  <li>Catalog</li>
                </Link>
                <Link to="/Cart">
                  <li>Cart</li>
                </Link>
              </ul>
            </div>
            <div className="button-container">
              <button type="button" id="openBtn" onClick={openNav}>
                <img
                  className="navigationIcon"
                  src={navigationIcon}
                  alt="Navigation icon"
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;   