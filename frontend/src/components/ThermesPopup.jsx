import Popup from "reactjs-popup";
import { useState } from "react";

import cartIcon from "../assets/icon-panier.png";

import "../styles/ThermesPopup.css";

function ThermesPopup() {
  const [quantity, setQuantity] = useState(0);

  const addArticle = () => {
    setQuantity((previousValue) => previousValue + 1);
  };

  const removeArticle = () => {
    if (!quantity) {
      setQuantity(0);
    } else {
      setQuantity((previousValue) => previousValue - 1);
    }
  };

  return (
    <Popup
      trigger={<button className="button"> Réservez </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="header">
            {" "}
            <img
              src="https://www.larousse.fr/encyclopedie/data/images/1008518-La_Terre.jpg"
              alt="terre"
            />
          </div>
          <div className="content">
            <p>Note :</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </p>
            <div id="infosContainer">
              <p>Horaires :</p>
              <p>Adresse :</p>
            </div>

            <div id="shoppingPartContainer">
              <div id="ticketsPartContainer">
                <div className="moreLess">
                  <p id="billets">Billets</p>
                  <button onClick={addArticle}>+</button>
                  <p>{quantity}</p>
                  <button onClick={removeArticle}>-</button>
                </div>
              </div>
            </div>

            <div className="buttonsContainer">
              <button id="addToCartButton">
                <img src={cartIcon} alt="cart icon" />
              </button>
              <p id="prix">Prix :</p>
              <div className="actions">
                <button
                  id="closeButton"
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ThermesPopup;
