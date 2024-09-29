import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import medicament from "./medicament.js";

export const applyType = sequelize.define("applyType", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  applyType: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});

applyType.belongsTo(medicament, { foreignKey: id });
medicament.hasMany(applyType, { foreignKey: id });

export default sequelize.model("applyType", applyType);
