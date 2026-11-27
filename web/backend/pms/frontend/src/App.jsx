import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './utils/ProtectedRoutes'
import AuthRoutes from './utils/AuthRoutes'
import Customers from './pages/customers/Customers'
import AddCustomer from './pages/customers/AddCustomer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* during login */}
        <Route element={<AuthRoutes />}>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/reset-password' element={<ResetPassword />} />
        </Route>

        {/* after login */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/customers/add' element={<AddCustomer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
