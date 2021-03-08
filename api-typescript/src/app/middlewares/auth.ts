import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization


    if(!authHeader){
        return res.status(401).json({ error: 'Token not provider.'})
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = jwt.verify(token, authConfig.secret);
        return next()
    } catch (error) {
        return res.status(401).json({ error: 'Token invalid.' });
    }
}