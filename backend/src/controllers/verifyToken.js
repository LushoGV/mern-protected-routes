import jwt from 'jsonwebtoken'
import config from '../config.js'

export const verify = (req, res, next) => {

    const token = req.headers["token"]
    if(!token) return res.status(401).json('unauthorized')
    
    const getId = jwt.verify(token, config.secret)

    req.userId = getId
    
    next()
}