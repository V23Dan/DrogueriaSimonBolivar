import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const supplier = sequelize.define("supplier", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  streetAddress: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default sequelize.model("supplier", supplier);
