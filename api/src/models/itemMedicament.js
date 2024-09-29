import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const itemMedicament = sequelize.define("itemMedicament", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});

export default sequelize.model("itemMedicament", itemMedicament);
