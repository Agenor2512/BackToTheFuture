/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import { useState } from "react";

import cartIcon from "../assets/icon-panier.png";

import "../styles/ThermesPopup.css";

function ThermesPopup({ therme }) {
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
            <img src={`http://localhost:8000${therme.image[0]}`} alt="terre" />
          </div>
          <div className="content">
            <p>Note : {therme.note}</p>
            <p>{therme.description}</p>
            <div id="infosContainer">
              <p>Horaires : {therme.horaire}</p>
              <p>Adresse :{therme.lieu}</p>
            </div>

            <div id="shoppingPartContainer">
              <div id="ticketsPartContainer">
                <div className="moreLess">
                  <p id="billets">Billets</p>
                  <button onClick={removeArticle}>-</button>
                  <p>{quantity}</p>
                  <button onClick={addArticle}>+</button>
                </div>
              </div>
            </div>

            <div className="buttonsContainer">
              <button id="addToCartButton">
                <img src={cartIcon} alt="cart icon" />
              </button>
              <p id="prix">Prix :{therme.prix}</p>
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
