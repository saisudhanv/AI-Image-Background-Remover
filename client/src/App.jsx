import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Result from './pages/result.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen bg-blue-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='result' element={<Result />} />
        <Route path='buy' element={<BuyCredit />} />
        <Route path='header' element={<Header />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App