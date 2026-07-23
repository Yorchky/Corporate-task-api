require('dotenv').config();

const express = require("express");
<<<<<<< Updated upstream

const app = express(); // declararse ANTES de usarse
const PORT = process.env.PORT || 5100;

const connectDB = require("./src/config/database");

const usuarioRoutes= require('./src/routes/usuarioRoutes');
=======
const helmet = require("helmet") // implemented
const app = express();

const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 4000;

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const tareaRoutes = require('./src/routes/tareaRoutes');
>>>>>>> Stashed changes

const tareaRoutes= require('./src/routes/tareaRoutes');
connectDB();

<<<<<<< Updated upstream
// MIDDLEWARE (IMPORTANTE)
=======
app.use(helmet());
>>>>>>> Stashed changes
app.use(express.json());

// ROUTES
app.use('/api/usuario', usuarioRoutes);
// ROUTES ACCOUNT
app.use('/api/tareas', tareaRoutes);

if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Hello World. Server running on port ${PORT}`);
  });
<<<<<<< Updated upstream
}
=======
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> Stashed changes

module.exports = app;