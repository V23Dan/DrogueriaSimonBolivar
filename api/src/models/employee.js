import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const employee = sequelize.define("employee", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allownull: false,
  },
  cellNumber: {
    type: DataTypes.STRING,
    allownull: false,
  },
  streetAddress: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default sequelize.model("employee", employee);
