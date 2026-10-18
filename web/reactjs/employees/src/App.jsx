import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Employees from './pages/Employees'
import EmployeeDetails from './pages/EmployeeDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employees' element={<Employees />}/>
        <Route path='/employees/:emp_id' element={<EmployeeDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
