require('dotenv').config();

const express = require("express");
const helmet = require("helmet");

const app = express();

const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 4000;

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const tareaRoutes = require('./src/routes/tareaRoutes');

connectDB();

app.use(helmet());
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/tareas', tareaRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Corporate Task API funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;