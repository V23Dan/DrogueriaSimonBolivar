import Sequelize from "sequelize";

export const sequelize = new Sequelize('SimonBolivar', 'postgres', 'admin', {
    host: "localhost",
    dialect: "postgres",
});