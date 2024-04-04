import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/layout/header/Header'
import Courses from './components/courses/Courses'
import Footer from './components/layout/footer/Footer'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>  
          <Route path='/' element={ <Home/> } />
          <Route path='/courses' element={ <Courses/> } />
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Register/> }/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App 