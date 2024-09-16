const express = require('express');
const router = express.Router();
const alquilerController = require('../controller/alquilerController');

router.post('/', alquilerController.crearAlquiler);

router.put('/:id', alquilerController.editarAlquiler);

router.delete('/:id', alquilerController.eliminarAlquiler);

router.get('/alquileres/:userId', alquilerController.verAlquileres);

module.exports = router;
