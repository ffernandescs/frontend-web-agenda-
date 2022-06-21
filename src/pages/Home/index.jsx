import { Table } from 'reactstrap'
import React, { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'
import { FaHome, FaUserFriends, FaUserAlt, FaBars } from 'react-icons/fa'
import { getUser, addContato, destroyContato } from '../../services/api'

import Nav from './Nav'
import './style.css'

const Home = () => {
    const { authenticated, logout, adicionar } = useContext(AuthContext)

    const [menuHamburger, setMenuHamburger] = useState(false)
    const [abaAddContato, setabaAddContato] = useState(false)
    const btnMenuHamburger = () => {setMenuHamburger(!menuHamburger)}
    const btnMenuAdd = () => {setabaAddContato(!abaAddContato)}

    const [contatos, setContatos] = useState([])

    const [loading, setLoading] = useState(true)

      useEffect(() => {
        (async () => {
            loadData()
        })()
      }, [])

    const handleLogout = () => {
        logout()
    }

    const userId = '62b167786934352eae099fa6'

    const loadData = async (query = '') => {
        const response = await getUser(userId)
        const data = response.data
        setContatos(data)
    }

    const [name, setName] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dateNasc, setDateNasc] = useState('')
    const [email, setEmail] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [fone, setFone] = useState('')


    const handleAddContato = (e) => {
        e.preventDefault()

        addContato(name, email, sobrenome, dateNasc, logradouro, fone)
        loadData()
        window.location.reload()
    }

    const handleDestroyContato = async (contatos) => {
        await destroyContato(userId, contatos._id)
        loadData()
    }




    return (
        <div className="containerMain">
             <div className="topPage">
                <div className="btnMenuResponse menuHamburger " onClick={btnMenuHamburger}>
                    <FaBars/>
                </div>
            </div>
            <header>   
               
                <div className={menuHamburger ? "sidebar active" : "sidebar"}>
                    <nav className='menu'>
                        <ul>
                        <li className='textLink'>
                            <div className="textMenu">
                                <div className='titleMenu'>
                                    <FaHome/>
                                    <span>Inicio</span>
                                </div>
                            </div>
                        </li>
                        <li className='textLink'>
                            <div className="textMenu">
                                <div className='titleMenu'>
                                    <FaUserFriends/>
                                    <span>Contatos</span>
                                </div>
                            </div>
                        </li>
                        <li className='textLink'>
                            <div className="textMenu">
                                <div className='titleMenu'>
                                    <FaUserAlt/>
                                    <span>Usuarios</span>
                                </div>
                            </div>
                        </li>
                            <Nav onLogout={ () => handleLogout()} className='textLink'/>
                        </ul>
                    </nav>
                </div>
                <div className="containerTable">
                    <div className="textBtn">
                        <h1>Contatos</h1>
                        <button onClick={btnMenuAdd}>Adicionar</button>
                    </div>
                    <div className="containerTabela">
                    <Table className='tabela responsive' striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SobreNome</th>
                                <th>Data de Nascimento</th>
                                <th>Email</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                                <th>Editar</th>
                                <th>Salva</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contatos.map((contato) => (
                                    <tr className='todos' key={contato._id}>
                                        <td>{contato.name}</td>
                                        <td>{contato.sobrenome}</td>
                                        <td>{contato.dateNasc}</td>
                                        <td>{contato.email}</td>
                                        <td>{contato.logradouro}</td>
                                        <td>{contato.fone}</td>
                                        <td>BOTAO</td>
                                        <td onClick={() => handleDestroyContato(contatos)}>BOTAO</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    </div>
                    <div className={abaAddContato ? "adicionarContact active" : "adicionarContact"}>
                        <form action className='formAdd'>
                            <h1>Adicionar Contato</h1>
                            <div className='campos'>
                                <label htmlFor="name"></label>
                                <input 
                                type="text" 
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Digite seu nome' />
                            </div>
                            <div className='campos'>
                                <label htmlFor="sobrenome"></label>
                                <input 
                                type="text" 
                                name='sobrenome' 
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                                placeholder='Digite seu seobrenome' />
                            </div>
                            <div className='campos'>
                                <label htmlFor="name"></label>
                                <input 
                                type="text" 
                                name='date'
                                value={dateNasc}
                                onChange={(e) => setDateNasc(e.target.value)} 
                                placeholder='Digite sua data de nascimento'/>
                            </div>
                            <div className='campos'>
                                <label htmlFor="email"></label>
                                <input 
                                type="text" 
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Digite seu Email'/>
                            </div>
                            <div className='campos'>
                                <label htmlFor="end"></label>
                                <input 
                                type="text" 
                                name='end'
                                value={logradouro}
                                onChange={(e) => setLogradouro(e.target.value)} 
                                placeholder='Digite seu Endereço'/>
                            </div>
                            <div className='campos'>
                                <label htmlFor="tel"></label>
                                <input 
                                type="text" 
                                name='tel'
                                value={fone}
                                onChange={(e) => setFone(e.target.value)} 
                                placeholder='Digite seu numero'/>
                            </div>
                            <div className="acoes">
                                <button type='button' onClick={btnMenuAdd}>Sair</button>
                                <button type='button' onClick={handleAddContato}>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;