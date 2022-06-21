import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import Image from '../../components/img/image.jpg'


import './style.css'

 const Login = () => {

    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className="containerGeral">
            <div className="containerLogin">
                <div className="infoLogin">
                    <h1>WebAgenda</h1>
                    <img src={Image} alt="" />
                </div>
                <form className="form">
                    <h1>Faça seu login</h1>
                    <div className="cpLogin">
                        <label htmlFor="usuario">Usuario</label>
                        <input 
                        type="text" 
                        name="usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu usuario"
                        />
                    </div>
                    <div className="cpLogin">
                        <label htmlFor="password">Usuario</label>
                        <input 
                        type="password" 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        />
                        
                    </div>
                    <div className="acoes">
                        <button onClick={handleSubmit} type='button' className="btnAcessar" >Acessar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;