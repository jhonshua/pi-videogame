const { Router } = require("express");
require("dotenv").config();
const { videogame } = require("../controllers");
const { Videogame, Genres } = require("../db.js");

const router = Router();




//GET /{idVideogame}  prueba realizada en postman http://localhost:3001/videogame/34988 --------------------------------------------------------------------------------------------------------


router.get("/:idVideogame", async (req, res, next) => {
  const { idVideogame } = req.params; //* El id me llega por params
  let data = await videogame(idVideogame);

  try {
    data
      ? res.send(data)
      : res
          .status(404)
          .send("El id ingresado no coincide con un videojuego en particular");
  } catch (e) {
    next(e);
  }
});





// POST /videogame  donde mado a escribir a mi base datos  ---------------------------------------------------------------------------------------




router.post("/", async (req, res, next) => {
  const { name, image, genres, released, rating, platforms, description } =
    req.body;
  //* La accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
  try {
    let newVideogame = await Videogame.create({
      //* Le paso al metodo create el modelo con todos los atributos que quiero que tenga mi nuevo videojuego

      name,
      image,
      released,
      rating,
      platforms,
      description,
    });
    const relacion = await Genres.findAll({
      //* En Generos busca
      where: {
        //* Donde
        name: genres,
      },
    });
    await newVideogame.addGenres(relacion); //* Al juego creado, le agrego algun genero que pedimos en el body, pero no agregamos con el metodo create, porque los generos son finitos.

    res.json(newVideogame);


    
  }catch (error) {
    console.log('No se ha podido crear el juego en la base de datos', error)
  }
});

module.exports = router;
