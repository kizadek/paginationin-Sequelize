const express = require("express");
require("colors");
require("dotenv").config({ path: "./config/config.env" });
const morgan = require("morgan");
const userAuth = require("./routes/auth/user-auth");
const { sequelize, connectDatabase } = require("./db/connection/connect");

// app
const app = express();

//middleware
app.use(morgan("dev"));

//mount routes
app.use("/api/auth/", userAuth);
//errors

//set connection
const PORT = 3000;

const start = async () => {
  try {
    //connection
    await connectDatabase();
    app.listen(
      PORT,
      console.log(`server is running on http://localhost:${PORT}....`.cyan)
    );
  } catch (error) {}
};

start();

///  controllers
