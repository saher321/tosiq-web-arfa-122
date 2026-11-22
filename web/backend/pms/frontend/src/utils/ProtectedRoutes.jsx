import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../store/useAuth.js'

const ProtectedRoutes = () => {
    const isAuthenticated = useAuth(state => state.isAuthenticated)

    return isAuthenticated ? <Outlet />:
    <Navigate to={'/auth/login'} />
    
}

export default ProtectedRoutes