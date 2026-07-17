const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const tareaController = require("../controllers/tareaController");

router.use(auth);

router.post("/", tareaController.createTarea);
router.get("/", tareaController.getTareas);
router.get("/:id", tareaController.getTareaById);
router.put("/:id", tareaController.updateTarea);
router.delete("/:id", tareaController.deleteTarea);

module.exports = router;