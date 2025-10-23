import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='result' element={<Result />} />
        <Route path='buy' element={<BuyCredit />} />
        <Route path='header' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App