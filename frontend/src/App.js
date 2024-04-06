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
import ChangePassword from './components/profile/ChangePassword'
import UpdateProfile from './components/profile/UpdateProfile'
import Dashboard from './components/admin/dashboard/Dashboard'
import CreateCourse from './components/admin/create_course/CreateCourse'
import AdminCourses from './components/admin/admin_courses/AdminCourses'
import Users from './components/admin/users/Users'

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
          <Route path='/changepassword' element={ <ChangePassword/> }/>
          <Route path='/updateprofile' element={ <UpdateProfile/> }/>
          

          <Route path='/subscribe' element={ <Subscribe/> } />
          <Route path='/paymentsuccess' element={ <PaymentSuccess/> } />
          <Route path='/paymentfail' element={ <PaymentFail/> } />

          
          <Route path='/admin/dashboard' element={ <Dashboard/> } />
          <Route path='/admin/createcourse' element={ <CreateCourse/> } />
          <Route path='/admin/courses' element={ <AdminCourses/> } />
          <Route path='/admin/users' element={ <Users/> } />


          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App 