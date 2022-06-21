import React, { useContext } from 'react';

import { Routes, useNavigate, Route, Router, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from "./contexts/auth";

import Login from "./pages/Login";
import Home from "./pages/Home";

const AppRoutes = () => {
    
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)
        if(loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/login"/>
        }

        return children
    }


    
    return (
    <AuthProvider>
        <Routes>
            <Route exact path="/" element={<Private><Home /></Private>}/>
            <Route exact path="/login" element={<Login />} />
        </Routes>
    </AuthProvider>
            
            
       
    )
}

export default AppRoutes