import logo from '../images/logo.png'

const AboutUs = () => {
  return (
    <div style={{textAlign: 'center', display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2>Sobre Nosotros</h2>
      <img src={logo} alt="" />
      <p style={{width: '60%', lineHeight: '2em'}}>  En Tu Fulbito, nos dedicamos a ofrecer la mejor experiencia futbolística en nuestra cancha de fútbol 5. Sabemos lo importante que es para vos y tus amigos contar con un lugar cómodo, seguro y bien equipado para disfrutar de su partido semanal o esa pichanga improvisada. Nuestra cancha está diseñada para brindar un ambiente óptimo tanto para partidos amistosos como para competiciones más serias.

Ubicada en un lugar accesible, Tu Fulbito te ofrece instalaciones de primer nivel, vestuarios cómodos y un ambiente ideal para pasarla bien. Contamos con un sistema de reservas sencillo y rápido, que te permitirá asegurarte de que la cancha esté lista para cuando más la necesites.

Ya sea que vengas a jugar con amigos, a entrenar o simplemente a divertirte, en Tu Fulbito te esperamos con los brazos abiertos. Nuestra pasión por el fútbol se refleja en cada detalle, porque sabemos que para vos el fútbol no es solo un deporte, es una manera de compartir, competir y disfrutar.   
    </p>
   </div>
  )
}

export default AboutUs
