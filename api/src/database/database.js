import Sequelize from "sequelize";

export const sequelize = new Sequelize('DrogueriaSimonBolivar', 'postgres', 'admin', {
    host: "localhost",
    dialect: "postgres",
});