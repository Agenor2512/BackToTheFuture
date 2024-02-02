// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import "/src/styles/ThermesCatalog.css";
import ThermesPopup from "../components/ThermesPopup";
import CartDetails from "../components/CartDetails";

function ThermesCatalog() {
  const thermes = useLoaderData();

  return (
    <>
      <div className="allBathCardOverview">
        {thermes.map((therme) => (
          <CartDetails key={therme.id} therme={therme} />
        ))}
        ;
        <div className="divButton">
          {thermes.map((therme) => (
            <ThermesPopup key={therme.id} therme={therme} />
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default ThermesCatalog;
