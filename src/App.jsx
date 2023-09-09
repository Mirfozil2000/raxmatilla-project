import React from 'react'
import Main from './pages/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>       
         <Route path='/contact' element={<Contacts/>}/>
         <Route path='/cources' element={<Courses/>}/>        
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
