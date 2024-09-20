import { useState } from 'react';

const Registro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Los datos que se van a enviar al backend
    const userData = {
      name,
      email,
      password
    };

    // Hacer una solicitud POST para registrar un usuario
    fetch('http://localhost:3000/api/users/', {
      method: 'POST',  // Método HTTP para enviar datos
      headers: {
        'Content-Type': 'application/json' // Enviar JSON al servidor
      },
      body: JSON.stringify(userData) // Convertir los datos a una cadena JSON
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Si la respuesta es exitosa, mostrar mensaje de éxito
          setResponseMessage('Usuario registrado exitosamente!');
        } else {
          // Si hay un error, mostrar el mensaje de error
          setResponseMessage(data.msg || 'Error al registrar usuario');
        }
      })
      .catch((error) => {
        // Si hay un error en la solicitud, manejarlo aquí
        setResponseMessage('Error de conexión');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Registro;