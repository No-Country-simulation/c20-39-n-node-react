import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e)=>{
      e.preventDefault();

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={user.email} onChange={handleEmailChange}/>

        <label>Contraseña</label>
        <input type="password" value={user.password} onChange={handlePasswordChange}/>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login
