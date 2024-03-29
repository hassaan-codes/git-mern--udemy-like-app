import React from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/layout/header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>  
          <Route path='/' element={ <Home/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App 