const Sequelize = require("sequelize");
require("dotenv").config({ path: "../../config/config.env" });

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;

const sequelize = new Sequelize(database, username, password, {
  port: port,
  host: "127.0.0.1",
  dialect: "postgres",
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.log(`filed to connect to database ${error}`);
  }
};

module.exports = {
  sequelize,
  connectDatabase,
};
