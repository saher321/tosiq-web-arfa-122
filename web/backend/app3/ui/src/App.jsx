import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Clients from './pages/Clients'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App