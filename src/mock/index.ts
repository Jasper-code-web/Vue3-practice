import { MockMethod } from 'vite-plugin-mock'
import { sign, verify} from 'jsonwebtoken'

const secret = 'secret'

export default [
    {
        url: 'api/get',
        method: 'get',
        response: (req: any) => {
            const token = req.headers['authorization'].split(' ')[1];
            try {
                let decoded: any = verify(token, secret)
                if(decoded.user === 'dasheng') {
                    return {
                        code: 20000,
                        data: decoded.user
                    }
                }
                throw new Error('Invalid token')
            } catch(err) {
                return {
                    code: 401,
                    data: 'Invalid token'
                }
            }
        }
    },
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000,
        response: (req: any, res: any) => {
            const body = req.body
            if(body.name !== 'dasheng' || body.password !== '123456') {
                return {code: 60204, message: 'Usernmae or password is incorrect'}
            }

            const token = sign({user: body.name}, secret, {
                expiresIn: 60
            })

            return {
                code: 20000,
                data: token
            }
        }
    },
    {
        url: '/api/text',
        method: 'post',
        rawResponse: async (req: any, res: any) => {
            let reqbody = ''
            await new Promise(resolve => {
                req.on('data', (chunk: any) => {
                    reqbody += chunk
                })
                req.on('end', () => resolve(undefined))
            })
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 200;
            res.end(`hello, ${reqbody}`)
        }
    }
] as MockMethod[]