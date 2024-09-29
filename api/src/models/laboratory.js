import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import medicament from "./medicament.js";

export const laboratory = sequelize.define("laboratory", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

laboratory.belongsTo(medicament, { foreignKey: id });
medicament.hasMany(laboratory, { foreignKey: id });

export default sequelize.model("laboratory", laboratory);
