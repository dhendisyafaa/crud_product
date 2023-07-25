import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
  "upload_db",
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default db;
