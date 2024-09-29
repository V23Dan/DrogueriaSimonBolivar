import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  date: {
    type: DataTypes.DATE,
    allownull: false,
  },
  total: {
    type: DataTypes.DOUBLE,
    allownull:false,
  }
});

export default sequelize.model("order", order);