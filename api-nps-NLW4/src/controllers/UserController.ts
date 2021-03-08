import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepostiory'
import * as yup from 'yup'
import { AppError } from '../errors/AppError'

class UserController {
    async create(req: Request, res: Response){
        const {name, email, password} = req.body

        const schema = yup.object().shape({
            name: yup.string().required('Nome é obrigatório!'),
            email: yup.string().email().required('Email não informado ou incorreto!'),
            password: yup.string().required('Senha deve ter mínimo de 6 caracteres').min(6),
        })

        try {
            await schema.validate(req.body, { abortEarly: false})
        } catch (err) {
            throw new AppError(err);
        }

        const usersRepository = getCustomRepository(UserRepository)

        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists){
            throw new AppError("User already exists!");
        }
        const user = usersRepository.create({
            name,
            email,
            password
        })

        await usersRepository.save(user)

        return res.status(201).json(user)
    }
}

export { UserController }
