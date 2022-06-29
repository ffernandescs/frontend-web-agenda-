import React, { useState, useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClipLoader from "react-spinners/ClipLoader";

import { AuthContext } from '../../contexts/auth';

import Image from '../../components/img/image.jpg'



import './style.css'


 const Login = () => {

   

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    const onSubmit = (dados) => {
        setLoading(true)
        login(email, password)
    }

    if(loading) {
        return <div className="loading">
            <ClipLoader
            color="#2C439C"
            cssOverride={{}}
            loading
            size={64}
            />
        </div>
    }

    return (
        <div className="containerGeral">
            <div className="containerLogin">
                <div className="infoLogin">
                    <h1>WebAgenda</h1>
                    <img src={Image} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <h1>Faça seu login</h1>
                    <Box className="cpLogin">
                        <TextField
                        variant='outlined'
                        label="Digite seu email"
                        fullWidth
                        autoComplete='email'
                        autoFocus
                        type="text" 
                        name="email"
                        value={email}
                        {...register("email", {
                            required: 'Campo Obrigatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email invalido"
                            }
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                        onChange={(e) => setEmail(e.target.value)}

                        />
                    </Box>
                    <Box className="cpLogin">
                        <TextField 
                        variant='outlined'
                        label="Digite sua senha"
                        fullWidth
                        autoComplete='email'
                        autoFocus
                        type="password" 
                        name="password"
                        value={password}
                        {...register("password", {
                            required: 'Campo Obrigatorio',
                            pattern: {
                                message: "Senha invalida"
                            }
                        })}
                        error={!!errors?.password}
                        helperText={errors?.password ? errors.password.message : null}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <div className="acoes">
                        <button type='submit' className="btnAcessar" >Acessar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;