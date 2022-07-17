import request from './index'

export const login = (reqData: object): object => request.post('api/login', reqData).then(res => {
    return res
})