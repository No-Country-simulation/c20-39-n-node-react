import cancha from '../images/cancha.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{color: '#004'}}>
      <img src={cancha} alt="" />
      <h1>Tu Fulbito</h1>
      <p>El lugar donde podrás disfrutar de jugar con tus amigos. </p>
      <Link to='/horarios'>¡Reservá ya tu lugar!</Link>
      
    </div>
  )
}

export default Home
