const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const usuarioController = require("../controllers/usuarioController");

router.use(auth);

router.post("/", usuarioController.createUsuario);
router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUsuarioById);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

module.exports = router;