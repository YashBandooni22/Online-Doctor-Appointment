import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import MyAppointment from './pages/MyAppointment'
import AppointmentPage from './pages/AppointmentPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointments' element={<MyAppointment />} />
        <Route path='/myappointments/:docId' element={<AppointmentPage />} /> 
        <Route path='/login' element={< Login />} />
        <Route path='/policy' element={< PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
