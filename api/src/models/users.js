import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allownull: false,
  },
  nombre1: {
    type: DataTypes.STRING,
    allownull: false,
  },
  nombre2: {
    type: DataTypes.STRING,
    allownull: true,
  },
  apellido1: {
    type: DataTypes.STRING,
    allownull: false,
  },
  apellido2: {
    type: DataTypes.STRING,
    allownull: true,
  },
  documento: {
    type: DataTypes.STRING,
    primaryKey: true,
    allownull:false,
  },
  password: {
    type: DataTypes.STRING,
    allownull:false,
  },
});

export default sequelize.model("user", user);
