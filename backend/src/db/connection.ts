import { Sequelize } from "sequelize-typescript";

import accessEnv from "#root/helpers/accessEnv";

import { Subscriber } from "./models";

const dbURL = accessEnv("DB_URL");

// const sequelize = new Sequelize(dbURL, {
const sequelize = new Sequelize(dbURL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: true,
  models: [Subscriber]
});
export default sequelize;