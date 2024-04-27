import { jwtDecode } from 'jwt-decode'
const token = localStorage.getItem('token')
interface DecodedToken {
  identity: number
  account: string
  iat: number
  exp: number
}

let decodedToken: DecodedToken | null = null
if (token) {
  try {
    decodedToken = jwtDecode(token)
  } catch (error) {
    console.error('Failed to decode token', error)
  }
}

const cs = {
  token,
  decodedToken
}

export default cs
