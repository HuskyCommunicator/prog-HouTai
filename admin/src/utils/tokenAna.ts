import jwt from 'jsonwebtoken'

let token = '你的 JWT Token'

let decodedToken = jwt.decode(token)

console.log(decodedToken)
