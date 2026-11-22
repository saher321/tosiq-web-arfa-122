import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../store/useAuth.js'

const AuthRoutes = () => {
    const isAuthenticated = useAuth(state => state.isAuthenticated)

    return isAuthenticated ? <Navigate to="/" /> :
    <Outlet />
}

export default AuthRoutes