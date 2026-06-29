require('dotenv').config();

const express = require("express");

const app = express(); // declararse ANTES de usarse
const PORT = process.env.PORT || 5100;

const connectDB = require("./src/config/database");


connectDB();

app.listen(PORT, () => {
  console.log(`Hello World. Server in running on port ${PORT}`);
});