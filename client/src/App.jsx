import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
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