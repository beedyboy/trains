import { Sequelize } from "sequelize-typescript";

import accessEnv from "../helpers/accessEnv";

import { Subscriber, Blog } from './models';
const dbURL = accessEnv("DB_URL_TEST");


// const sequelize = new Sequelize(dbURL, {
const sequelize = new Sequelize(dbURL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: true,
  models: [Subscriber, Blog]
});
export default sequelize;