require("dotenv").config();

const { generarApplicationToken } = require("./src/helpers/applicationToken");

console.log(generarApplicationToken());
