import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config.js'

export const verify = (req, res, next) => {

    const token = req.headers["token"]
    if(!token) return res.status(401).json('unauthorized')
    
    const getId = jwt.verify(token, JWT_SECRET)

    req.userId = getId
    
    next()
}