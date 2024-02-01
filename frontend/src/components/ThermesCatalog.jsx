// eslint-disable-next-line no-unused-vars
import React from "react";
import "/src/styles/ThermesCatalog.css";
import ThermesPopup from "./ThermesPopup";
import axios from "axios";
import { useEffect, useState } from "react";

function ThermesCatalog() {
  const [dataThermes, setDataThermes] = useState([]);

  const getAllThermes = () => {
    axios
      .get("http://localhost:3000/thermes")
      .then((res) => setDataThermes(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllThermes();
  }, []);
  console.info(dataThermes);

  return (
    <div className="allBathCardOverview">
      {dataThermes.map((bath) => (
        <div key={bath}>
          <img
            src="https://www.larousse.fr/encyclopedie/data/images/1008518-La_Terre.jpg"
            alt="Bain"
          />
          <h1>Bain</h1>
          <p>
            Ce bain a eu une capacité de 20 personnes, son eau est chaude et
            pur.
          </p>
          <div className="divButton">
            <ThermesPopup />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThermesCatalog;
