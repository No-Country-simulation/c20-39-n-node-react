import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-around', height: '4.5em', backgroundColor: '#aa99'}}>
        <img src={logo} alt="Logo" />
        <ul style={{display: 'flex', gap: '15px'}}>
            <li><Link to='/' style={{color: '#fff'}}>Inicio</Link></li>
            <li><Link to='/horarios' style={{color: '#fff'}}>Reservar</Link></li>
            <li><Link to='/contact' style={{color: '#fff'}}>Contacto</Link></li>
            <li><Link to='/about' style={{color: '#fff'}}>Sobre Nosotros</Link></li>
            <li><Link to='/Login' style={{color: '#fff'}}>Iniciar sesión</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
