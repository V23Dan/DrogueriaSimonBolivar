import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/users.js';

async function main() {
  try {
    await sequelize.sync();
    app.listen(3000);
    console.log("Server en puerto: ", 3000);
  } catch (error) {
    console.log("No se establecio conexion", error);
  }
}

main();
