const express = require('express')
const router = express.Router()
const { listarReservaPorUsuario, crearReserva } = require('../controllers/reservasController')

// apis/reservation

router.get('/:id',listarReservaPorUsuario)
router.post('/:id',crearReserva)
module.exports = router