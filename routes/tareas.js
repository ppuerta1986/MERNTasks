// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crear una tarea
// api/tarea
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

// Obtener las tareas por proyecto

router.get('/',
    auth,
    tareaController.obtenerTarea
);

// Actualizar tarea

router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

//Eliminar un proyecto
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
);

module.exports = router;