const { Alquiler, Cancha } = require('../database/models');

exports.crearAlquiler = async (req, res) => {
    const { userId, canchaId } = req.params;
    const { horarioInicio, horarioFin } = req.body;

    try {
        const cancha = await Cancha.findByPk(canchaId);
        if (!cancha) {
            return res.status(404).json({ message: 'Cancha no encontrada' });
        }

        const alquiler = await Alquiler.create({
            userId,
            canchaId,
            horarioInicio,
            horarioFin
        });

        return res.status(201).json(alquiler);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el alquiler', error });
    }
};

exports.editarAlquiler = async (req, res) => {
    const { id } = req.params;
    const { horarioInicio, horarioFin } = req.body;

    try {
        const alquiler = await Alquiler.findByPk(id);
        if (!alquiler) {
            return res.status(404).json({ message: 'Alquiler no encontrado' });
        }

        alquiler.horarioInicio = horarioInicio;
        alquiler.horarioFin = horarioFin;
        await alquiler.save();

        return res.status(200).json(alquiler);
    } catch (error) {
        return res.status(500).json({ message: 'Error al editar el alquiler', error });
    }
};

exports.eliminarAlquiler = async (req, res) => {
    const { id } = req.params;

    try {
        const alquiler = await Alquiler.findByPk(id);
        if (!alquiler) {
            return res.status(404).json({ message: 'Alquiler no encontrado' });
        }

        await alquiler.destroy();

        return res.status(200).json({ message: 'Alquiler eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el alquiler', error });
    }
};

exports.verAlquileres = async (req, res) => {
    const { userId } = req.params;

    try {
        const alquileres = await Alquiler.findAll({
            where: { userId },
            include: [
                {
                    model: Cancha,
                    as: 'cancha',
                    attributes: ['nombre', 'descripcion']
                }
            ],
            order: [['horarioInicio', 'DESC']]
        });

        if (!alquileres || alquileres.length === 0) {
            return res.status(404).json({ message: 'No se encontraron alquileres para este usuario' });
        }

        const ahora = new Date();
        const alquileresActivos = alquileres.filter(alquiler => new Date(alquiler.horarioFin) >= ahora);
        const alquileresPasados = alquileres.filter(alquiler => new Date(alquiler.horarioFin) < ahora);

        return res.status(200).json({
            alquileresActivos,
            alquileresPasados
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los alquileres', error });
    }
};