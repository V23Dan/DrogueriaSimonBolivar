import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/medicament.js';

async function main() {
  try {
    await sequelize.sync({force:true});
    app.listen(3000);
    console.log("Server en puerto: ", 3000);
  } catch (error) {
    console.log("No se establecio conexion", error);
  }
}

main();
