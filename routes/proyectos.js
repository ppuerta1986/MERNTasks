// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//crea proyectos
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El Nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto,
);

//Obtener todos los proyectos
// api/proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos,
);

//Actualizar Proyectos
router.put('/:id',
    auth,
    [
        check('nombre', 'El Nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

//Eliminar un proyecto
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);


module.exports = router;