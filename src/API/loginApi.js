import axios from "axios";
import jwt_decode from "jwt-decode"
import { $authHost, $host } from "./index";
import { REACT_APP_API_URL } from "./url";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://crm-client-blush.vercel.app' | '',
});

export const usersAPI = {
    getAllUsers() {
        return instance.get('/users')
    },
    getAllTimeUsers() {
        return instance.get('/today-records')
    }
}

export const registrationApi = async (login, password, name) => {
    const { data } = await $host.post('api/user/registration', { login, password, role: 'admin', name })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const loginApi = async (login, password) => {
    const { data } = await $host.post('api/user/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const checkApi = async () => {
    const { data } = await $authHost.get('api/user/auth', {})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getAllCards = async () => {
    const { data } = await $host.get('api/card/cards', {})
    localStorage.setItem('token-cards', data.token)
    return jwt_decode(data.token)
}