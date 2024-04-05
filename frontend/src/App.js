import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/layout/header/Header'
import Courses from './components/courses/Courses'
import Footer from './components/layout/footer/Footer'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import ForgetPassword from './components/auth/forget_password/ForgetPassword'
import ResetPassword from './components/auth/reset_password/ResetPassword'
import ContactUs from './components/contact/ContactUs'
import RequestCourse from './components/request_course/RequestCourse'
import About from './components/about/About'
import Subscribe from './components/payment/Subscribe'
import PageNotFound from './components/not_found/PageNotFound'
import PaymentSuccess from './components/payment/PaymentSuccess'
import PaymentFail from './components/payment/PaymentFail'
import CoursePage from './components/course_page/CoursePage'
import Profile from './components/profile/Profile'

const App = () => {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  })


  return (
    <BrowserRouter>
      <Header />
        <Routes>  
          <Route path='/' element={ <Home/> } />
          <Route path='/courses' element={ <Courses/> } />
          <Route path='/course/:id' element={ <CoursePage/> } />
          <Route path='/contactus' element={ <ContactUs/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/requestcourse' element={ <RequestCourse/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
          <Route path='/forgetpassword' element={ <ForgetPassword/> } />
          <Route path='/resetpassword/:resetToken' element={ <ResetPassword/> } />

          <Route path='/profile' element={ <Profile/> }/>

          <Route path='/subscribe' element={ <Subscribe/> } />
          <Route path='/paymentsuccess' element={ <PaymentSuccess/> } />
          <Route path='/paymentfail' element={ <PaymentFail/> } />

          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App 