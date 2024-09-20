import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [response, setResponse] = useState(null);


    const handleSubmit = (e)=>{
      e.preventDefault();

      fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la solicitud');
        }
        return res.json();
      })
        .then((data) => {
          setResponse(data); 
          console.log('Usuario logueado:', data.user);
        })
        .catch((error) => console.error('Error:', error));
        

    }

    const handleEmailChange = (e)=>{
      setUser({...user, email: e.target.value})
      console.log(e.target.value)
    }

    const handlePasswordChange = (e)=>{
      setUser({...user, password: e.target.value})
      console.log(e.target.value)
    }



  
    return (
    <div style={{display:'flex', flexDirection: 'column',alignItems: 'center'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={user.email} onChange={handleEmailChange} placeholder='Ingresa tu email'/>

        <label>Contraseña</label>
        <input type="password" value={user.password} onChange={handlePasswordChange} placeholder='Ingresa tu contraseña'/>

        <button type="submit">Iniciar sesión</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Login
