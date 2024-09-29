import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import medicament from "./medicament.js";

export const typeProduct = sequelize.define("typeProduct", {
  idType: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  typeMedicament: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

typeProduct.hasMany(medicament, {
  foreignKey: "typeProductId",
});

medicament.belongsTo(typeProduct, {
  foreignKey: "typeProductId",
});

export default sequelize.model("typeProduct", typeProduct);
