import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Clients from './pages/Clients'
import AddClient from './pages/AddClient'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/clients/add' element={<AddClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App