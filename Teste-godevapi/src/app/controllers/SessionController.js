import jwt from 'jsonwebtoken'
import * as Yup from 'yup'

import User from '../models/user'

import AppError from '../errors/AppError'

import authConfig from '../../config/auth'

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required('Email não informado ou incorreto!'),
            password: Yup.string()
                .required('Senha deve ter mínimo de 6 caracteres')
                .min(6),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            throw new AppError(err)
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            throw new AppError('User not found.', 401)
        }

        if (!(await user.compareHash(password))) {
            throw new AppError('Password does not match.', 401)
        }

        const { _id, name } = user

        return res.json({
            user: {
                _id,
                name,
            },
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        })
    }
}

export default new SessionController()
