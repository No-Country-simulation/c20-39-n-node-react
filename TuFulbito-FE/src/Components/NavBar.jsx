import logo from '../images/logo.png';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
        <img src={logo} alt="Logo" />
        <ul style={{display: 'flex', gap: '15px'}}>
            <li><Link to='/home' style={{color: '#fff'}}>Inicio</Link></li>
            <li><Link to='/horarios' style={{color: '#fff'}}>Reservar</Link></li>
            <li><Link to='/contact' style={{color: '#fff'}}>Contacto</Link></li>
            <li><Link to='/about' style={{color: '#fff'}}>Sobre Nosotros</Link></li>
            <li><Link to='/Login' style={{color: '#fff'}}>Iniciar sesión</Link></li>
            <li><Link to='/Register' style={{color: '#fff'}}>Registrarse</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
