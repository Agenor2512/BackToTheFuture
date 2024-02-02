// Load environment variables from .env file
require("dotenv").config();

const cors = require("cors");

// Get the port from the environment variables
const port = process.env.APP_PORT;
console.info(port);

const express = require("express");

/* eslint-disable no-shadow */
const data = require("../backend/src/data/data.json");
const { thermes } = data;

// Import the Express application from src/app.js
const app = express();

app.use(cors());

app.use(express.static("public"));

const browse = (_, res) => {
  res.json(thermes);
}

const read = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  // id de la requête
  const requestId = req.params.id;
  const therme = thermes.find(
    (therme) => therme.id === parseInt(requestId, 10)
  );
  if (therme == null) {
    res.sendStatus(404);
  } else {
    res.json(therme);
  }
};

// Route to get a list of thermes
app.get("/thermes", browse);

// Route to get a specific therme by ID
app.get("/thermes/:id", read);

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

// DE QUOI ON A BESOIN ?
//
// Supprimer tous les commentaires :)
//
// On a besoin de créer une instance de express
// const express = require("express")
//
// Le mettre dans app
// Stipuler un port
// Executer la fonction pour les cors
// Executer la fonction listen d'express
//
// Créer les fonctions et les routes
