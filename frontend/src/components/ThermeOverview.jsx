import React from "react";
import ThermesPopup from "./ThermesPopup";

import "../styles/CardOverview.css";

function ThermeOverview({ therme }) {
  return (
    <div className="cardOverviewContainer">
      <img src={`http://localhost:8000${therme.image[0]}`} alt={therme.nom} />
      <p className="thermeName">{therme.nom}</p>
      <p>{therme.description}</p>
      <div className="bookContainer">
        <ThermesPopup therme={therme} />
      </div>
    </div>
  );
}

export default ThermeOverview;
