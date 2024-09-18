import cancha from '../images/cancha.png'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Home = () => {
  return (
    <div style={{color: '#004', marginTop: '1.5em'}}>
      <img src={cancha} alt="" />
      <h1>Tu Fulbito</h1>
      <img src={logo} alt="" />
      <p>El lugar donde podrás disfrutar de jugar con tus amigos. </p>
      <Link to='/horarios'>¡Reservá ya tu lugar!</Link>
      
    </div>
  )
}

export default Home
