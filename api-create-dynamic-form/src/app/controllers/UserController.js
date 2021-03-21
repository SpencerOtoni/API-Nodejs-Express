import * as Yup from 'yup'
import User from '../models/User'

import AppError from '../errors/AppError'

class UserController {
    async store(req, res) {
        const { email } = req.body

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório!'),
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

        const userExists = await User.findOne({ where: { email } })

        if (userExists) {
            throw new AppError('User already exist.')
        }

        const { id, name } = await User.create(req.body)

        return res.status(201).json({
            id,
            name,
        })
    }
}

export default new UserController()
