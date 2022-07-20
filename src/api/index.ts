import axios from "axios";
import {getToken} from '@/utils/token'
import { message } from 'ant-design-vue';
console.log('process',process)
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        console.log(config)
        if(config && config.headers) {
            const token = getToken()
            config.headers['Autherication'] = token
            return config
        }
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code === 401) {
            message.error('登录失败，请重新登录')
            return Promise.reject(new Error(res.data || 'Error'))
        }
        if(res.code !== 20000) {
            return Promise.reject(new Error(res.data || 'Error'))
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service