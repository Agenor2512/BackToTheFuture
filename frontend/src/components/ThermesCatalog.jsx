// eslint-disable-next-line no-unused-vars
import React from "react";
import "/src/styles/ThermesCatalog.css";

function ThermesCatalog() {
  const baths = [
    {
      image:
        "https://www.superprof.fr/ressources/wp-content/uploads/2014/01/thermes-romains-eau.jpg",
      name: "Bain n°1",
      capacity: "2",
      city: "Athènes",
    },
    {
      image:
        "https://histoire-et-civilisations-anciennes.blog/wp-content/uploads/2020/10/Les-thermes-romains-de-Bath-en-Angleterre.-02.jpg",
      name: "Bain n°2",
      capacity: "5",
      city: "Thessalonique",
    },
    {
      image:
        "https://www.officiel-thermalisme.com/wp-content/uploads/2021/12/ODTMAG-PRATIQUE-histoire-thermalisme-UNE.jpg",
      name: "Bain n°3",
      capacity: "7",
      city: "Héraklion",
    },
    {
      image:
        "https://www.guide-piscine.fr/medias/image/les-bains-romains-ancetres-des-thermes_1-31023-1200-800.jpg",
      name: "Bain n°4",
      capacity: "12",
      city: "Corinthe",
    },
    {
      image:
        "https://www.officiel-thermalisme.com/wp-content/uploads/2021/12/ODTMAG-PRATIQUE-histoire-thermalisme-UNE.jpg",
      name: "Bain n°5",
      capacity: "20",
      city: "Kalamata",
    },
  ];
  console.info(baths);

  return (
    <div className="allBathCardOverview">
      {baths.map((bath) => (
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
            <button type="button"> Réservez cette therme </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThermesCatalog;
