//________________________________________________
// ________________#####__________________________
// ______________#########________________________
//______________############______________________
//______________#############_____________________
//_____________##__###########____________________
//____________###__######_#####___________________
//___________###_#######___####___________________
//__________###__##########_####__________________
//_________####__###########_####_________________
//________#####___###########__#####______________
//_______######___###_########___#####____________
//_______#####___###___########___######__________
//______######___###__###########___######________
// _____######___####_##############__######______
// ____#######__#####################_#######_____
// ____#######__##############################____
// ___#######__######_#################_#######___
// ___#######__######_######_#########___######___
// ___#######____##__######___######_____######___
// ___#######________######____#####_____#####____
// ____######________#####_____#####_____####_____
// _____#####________####______#####_____###______
// ______#####______;###________###______#________
// ________##_______####________####______________ 
//  * ********************************************
//  * **********        xxx        ***************
//  * ********************************************
//  * ********************************************


// creo primero el serviodor 

//1. realizara la peticion a la api
//2. realizara al peticon a la DB
//3. juntara esos dos datos y enviara un json al front

const server = require('./src/app.js');//los permisos de mi servidor y su configuracion
const { conn } = require('./src/db.js');//servidor conecta a mi base datos
const port = process.env.PORT || 3001;// nos traemos de nuestro archivos variables globales ||si no existe declaramos el port 3001

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {  //Puede utilizar sequelize.sync()para sincronizar automáticamente todos los modelos.
  server.listen(port, () => {            // luego de ejecutar las tablas de data base se trae las data completa de la api y de la base dato .
    console.log(`servidor corriendo en puerto: ${port} atento a las peticiones`);  // trae la info en getallDieta y deja el port escuchando las peticiones.
    console.log('conectado a la  base de dato videogames');
    console.log('recolecando datos de la api'); 
  });
});

