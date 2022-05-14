import jwt_decode from 'jwt-decode'

import { $local } from './_index'


export const registrationApi = async (email, password, login, role, name, clinic, specialization) => {
    // const { data } = await $host.post('api/user/registration', { login, password, role: 'admin', name, clinic: 'Филиал №1', specialization: 'Офтальмолог' })
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)

    const {data} = await $local.post('/register', {email, password, login, role, name, clinic, specialization })
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('name', data.user.name)
    return jwt_decode(data.accessToken)
}

export const loginApi = async (email, password) => {
    // const { data } = await $host.post('api/user/login', { login, password })
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)

    const { data } = await $local.post('/login', { email, password })
    localStorage.setItem('token', data.accessToken)
    // localStorage.setItem('name', data.user.name)
    localStorage.setItem('user', JSON.stringify(data.user))
    return (data.user)
}

// export const checkApi = async () => {
    // const { data } = await $authHost.get('api/user/auth', {})
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)
// }

// export const getAllCards = async () => {
//     const { data } = await $host.get('api/card/cards', {})
//     localStorage.setItem('token-cards', data.token)
//     return jwt_decode(data.token)
// }
