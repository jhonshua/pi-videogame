const axios = require("axios");
const { Router } = require("express");
const { Genres } = require("../db.js");
require('dotenv').config();



const router = Router();

const {API_KEY} = process.env;

// // RUTA GET -> /genres --------------------------------------------------------------------------------------------------------------

router.get("/", async (req, res, next) => {
  try {
    const respuesta = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const genresApi = await respuesta.data.results.map((g) => g.name);

    genresApi.map((e) =>
      Genres.findOrCreate({
        //* Guardo todos los generos que vienen de la API en la DB
        where: { name: e }, //
      })
    );

    const allGenres = await Genres.findAll(); //* Traigo todos los generos que existen, tanto de la API como de la DB. Porque los que venian de la API, ya fueron anteriormente guardados en la DB.
    res.json(allGenres);
  } catch (error) {
    console.log('ERROR EN RUTA GET A /genrs video games', error)
  }
});

module.exports = router;
