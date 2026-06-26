const express = require("express");

const app = express(); // declararse ANTES de usarse
const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Hello World. Server in running on port ${PORT}`);
});