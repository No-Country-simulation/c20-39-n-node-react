const express = require('express')
const router = express.Router()
const {listarReservaPorUsuario, listarReserva , crearReserva, editarReserva, eliminarReserva } = require('../controllers/reservasController')

// api/reservation

router.get('/:id',listarReservaPorUsuario)
router.get('/',listarReserva)
router.post('/',crearReserva)
router.put('/:id',editarReserva)
router.delete('/:id',eliminarReserva)

module.exports = router