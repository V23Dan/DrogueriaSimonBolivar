import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const store = sequelize.define("store", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  name: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});

export default sequelize.model("store", store);
