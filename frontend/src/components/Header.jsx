import {Link} from "react-router-dom";
import {useState} from "react";

import logo from "../assets/colonne.png";
import navigationIcon from "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";

import "../styles/Header.css";
import "../styles/Navigation.css"

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const openNavigation = () => {
    setIsNavigationOpen(true);
  };

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  };

  return (
    <header>
      <section className="headerContent">
        <div id="headContainer">
          <img id="logo" src={logo} alt="logo"/>
          <h1>Baths Guide</h1>
        </div>

        <nav>
          <section className={`sideNavigationContainer ${isNavigationOpen ? "openNavigation" : ""}`}>
            <button type="button"
                    className="closeNavigation"
                    onClick={closeNavigation}>
              &times;
            </button>

            <div className="openButtonContainer">
              <button type="button"
                      className="openNavigation"
                      onClick={openNavigation}>
                <img src={navigationIcon} alt="Navigation icon"/>
              </button>
            </div>

            <ul>
              <Link to="/">
                <li>Catalog</li>
              </Link>
              <Link to="/Cart">
                <li>Cart</li>
              </Link>
            </ul>
          </section>
        </nav>
      </section>
    </header>
  );
}

export default Header;