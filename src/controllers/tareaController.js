const Tarea = require("../models/Tarea");

// CREATE
exports.createTarea = async (req, res) => {
    try {
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.status(201).json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ ALL
exports.getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ ONE
exports.getTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: "No encontrada" });
        }

        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE
exports.updateTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!tarea) {
            return res.status(404).json({ msg: "No encontrada" });
        }

        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE
exports.deleteTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: "No encontrada" });
        }

        res.json({ msg: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};