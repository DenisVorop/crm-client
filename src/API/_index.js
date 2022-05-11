import axios from "axios"
import { REACT_APP_API_URL, REACT_APP_API_URL_JSON } from "./_url"


const $host = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL | '',
})

const $authHost = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL | '',
})

const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL_JSON | '',
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost,
    $host,
    $local,
}
