/* eslint-disable no-shadow */
const data = require("../data/data.json");

const { thermes } = data;

// GET all (récupère tous les éléments)
const browse = async (_, res, next) => {
  try {
    res.status(200).send(thermes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // eslint-disable-next-line prefer-destructuring
    // id de la requête
    const requestId = req.params.id;

    // Cherche la planète dans le tableau de données
    // en comparant l'id de la requête et l'id de la planète
    // dans le tableau de données
    const therme = thermes.find(
      (therme) => therme.id === parseInt(requestId, 10)
    );

    if (therme == null) {
      res.sendStatus(404);
    } else {
      res.json(therme);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
};
