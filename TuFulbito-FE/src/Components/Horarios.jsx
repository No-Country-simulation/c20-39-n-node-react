



import { useState, useEffect } from 'react';

const Horarios = () => {
  const [canchaId, setCanchaId] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [reservas, setReservas] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  // Cargar reservas guardadas del localStorage al iniciar
  useEffect(() => {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasGuardadas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaReserva = {
      id: reservas.length + 1, // Para identificar cada reserva
      canchaId,
      fechaReserva,
    };

    // Verificar si la cancha ya está reservada para esa fecha
    const existeReserva = reservas.some(
      (reserva) =>
        reserva.canchaId === canchaId && reserva.fechaReserva === fechaReserva
    );

    if (existeReserva) {
      setResponseMessage('La cancha ya está reservada en esa fecha');
    } else {
      // Agregar nueva reserva a la lista de reservas
      const nuevasReservas = [...reservas, nuevaReserva];
      setReservas(nuevasReservas);
      
      // Guardar las reservas en el localStorage
      localStorage.setItem('reservas', JSON.stringify(nuevasReservas));

      setResponseMessage('Reserva realizada con éxito');
    }
  };

  return (
    <div>
      <h1>Reservar Cancha</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cancha:</label>
          <input
            type="text"
            value={canchaId}
            onChange={(e) => setCanchaId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha y hora:</label>
          <input
            type="datetime-local"
            value={fechaReserva}
            onChange={(e) => setFechaReserva(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}

      <h2>Reservas actuales</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            Cancha: {reserva.canchaId} - Fecha: {reserva.fechaReserva}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Horarios;
