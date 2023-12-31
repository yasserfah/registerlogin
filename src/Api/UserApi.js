import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function LoginUser(body) {
    return api.post('/customers/login', body)
}

export function RegisterUser(body) {
    return api.post('/customers/signup', body)
}


export function Test(){
    return api.get('/')
}




export default api