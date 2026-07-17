require('dotenv').config();

const express = require("express");

const app = express();

const connectDB = require("./src/config/database");

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const tareaRoutes = require('./src/routes/tareaRoutes');

connectDB();

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;