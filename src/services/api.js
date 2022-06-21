import axios from "axios";

export const api = axios.create({
    baseURL: "https://web-agenda.herokuapp.com"
})

export const createSession = async (email, password) => {
    return api.post('/sessions', {email, password})
}

export const getUser = async (userId, query) => {
    let contatos = `/users/${userId}/contatos`

    return api.get(contatos)
}

export const addContato = async (name, email, sobrenome, dateNasc, logradouro, fone) => {
    return api.post('/users/62b12ab24cd79bc60fba302f/contatos', {name, email, sobrenome, dateNasc, logradouro, fone})
}

export const destroyContato = async (userId, id) => {
    const url = `/users/${userId}/contatos/${id}`
    return api.delete(url)
}

export const updateContato = async (name, email, sobrenome, dateNasc, logradouro, fone) => {
    return api.put('/users/62b12ab24cd79bc60fba302f/contatos', {name, email, sobrenome, dateNasc, logradouro, fone})
}

