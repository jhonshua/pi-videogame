const { Router } = require("express");
require("dotenv").config();
const { getTotalInfo, infoApi, nameApi, infoDB } = require("../controllers");

const router = Router();



//GET /videogames   donde traigo todo los juegos prueba realizada en postman http://localhost:3001/videogames   -----------------------------------------------------------------------------------------------------------


router.get("/", async (req, res, next) => {
  const { name } = req.query; //* El nombre deria de llegarar por el query
  let allVideogames = await getTotalInfo();

  if (name) {
    try {
      const foundGamesAPI = await nameApi(name);
      const gamesByNameDB = await infoDB();
      let foundGamesDB = gamesByNameDB.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      let allResults = foundGamesDB.concat(foundGamesAPI);
      allResults.length
        ? res.status(200).send(allResults.slice(0, 15))
        : res.status(400).send("No hay un videojuego con dicho nombre");
    } catch (err) {
      next(err);
    }
  } else {
    res.send(allVideogames);
    return;
  }
});


//GET / videogames/platforms traer todas las plataformas de juegos pruebas realizadas en postman http://localhost:3001/videogames/platforms-------------------------------------------------------------------------------------------

router.get("/platforms", async (req, res, next) => {
  try {
    const all = await infoApi();
    const allPlatforms = [];
    all.map((g) =>
      g.platforms.map((p) => {
        if (!allPlatforms.includes(p)) {
          allPlatforms.push(p);
        }
      })
    );

    allPlatforms.length
      ? res.status(200).json(allPlatforms)
      : res.status(404).send("Error");
  } catch (e) {
    next(e);
  }
});


//GET ------filtar todos los juegos por plataformas pruebas realizadas en postman http://localhost:3001/videogames?platforms="PlayStation 3"


router.get("/:platforms", async (req, res, next) => {
  const { platforms } = req.params;

  const data = await infoTotal();

  const pc = data.filter((vg) => i.platforms === "PC");

  pc ? res.status(200).json(pc) : res.status(404).send("Error");
});

module.exports = router;
