import { DataTypes, STRING } from "sequelize";
import { sequelize } from "../database/database.js";

export const medicament = sequelize.define(
  "medicament",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allownull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    batch: {
      type: DataTypes.STRING,
      allownull: false,
    },
    stockIn: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    stockOut: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    purchaseValue: {
      type: DataTypes.DOUBLE,
      allownull: false,
    },
    saleValue: {
      type: DataTypes.DOUBLE,
      allownull: false,
    },
    expirationDate: {
      type: DataTypes.TIME,
      allownull: false,
    },
    statusMedicament: {
      type: DataTypes.STRING,
      allownull: false,
    },
    typeProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "typeProduct",
        key: "idType",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default sequelize.model("medicament", medicament);
