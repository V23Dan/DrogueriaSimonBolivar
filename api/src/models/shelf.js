import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const shelf = sequelize.define("shelf", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  nameShelf: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});

export default sequelize.model("shelf", shelf);
