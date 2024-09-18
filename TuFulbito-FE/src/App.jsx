
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Horarios from './Components/Horarios'
import {Routes, Route} from 'react-router-dom'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/horarios" element={<Horarios/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
