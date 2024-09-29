import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const date = sequelize.define("date", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  description: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default sequelize.model("date", date);
