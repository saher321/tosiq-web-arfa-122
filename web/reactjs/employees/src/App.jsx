import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Employees from './pages/Employees'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employees' element={<Employees />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
