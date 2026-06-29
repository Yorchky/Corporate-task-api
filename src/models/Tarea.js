const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        default: ""
    },

    estado: {
        type: String,
        enum: ['Pendiente', 'En progreso', 'Completada'],
        default: 'Pendiente'
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Tarea', tareaSchema);