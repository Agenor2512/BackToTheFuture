const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import planetControllers module for handling planet-related operations
const thermesControllers = require("./controllers/itemControllers");

// Route to get a list of planets
router.get("/thermes", thermesControllers.browse);

// Route to get a specific planet by ID
router.get("/thermes/:id", thermesControllers.read);

/* ************************************************************************* */

module.exports = router;
