import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

import AppError from '../errors/AppError'

export default async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError('User already exist.')
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = await jwt.verify(token, authConfig.secret)

        req.userId = decoded.id

        return next()
    } catch (error) {
        throw new AppError('Token invalid.')
    }
}
