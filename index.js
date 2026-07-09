require('dotenv').config();

const express = require("express");

const app = express(); // declararse ANTES de usarse
const PORT = process.env.PORT || 5100;

const connectDB = require("./src/config/database");

const usuarioRoutes= require('./src/routes/usuarioRoutes');

const tareaRoutes= require('./src/routes/tareaRoutes');
connectDB();

// MIDDLEWARE (IMPORTANTE)
app.use(express.json());

// ROUTES
app.use('/api/usuario', usuarioRoutes);
// ROUTES ACCOUNT
app.use('/api/tareas', tareaRoutes);

app.listen(PORT, () => {
  console.log(`Hello World. Server in running on port ${PORT}`);
});