import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepostiory'
import * as yup from 'yup'
import { AppError } from '../errors/AppError'
import jwt from 'jsonwebtoken';


import authConfig from '../config/auth'


class AuthService {
    async create(req: Request, res: Response) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
        });

        try {
            await schema.validate(req.body, { abortEarly: false})
        } catch (err) {
            throw new AppError('validation fails.');
        }
    
        const { email, password } = req.body;

        const usersRepository = getCustomRepository(UserRepository)

        const user = await usersRepository.findOne({
            email
        })

        if(!user){
            throw new AppError('User not found.', 401);
        }

        const checkPassword = await user.comparePassword(password)

        if (!checkPassword) {
            throw new AppError('Password does not match.', 401);
        }

        const { id } = user;

        const token = jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        })

        return res.json({
            user: { id },
            token
        })
        
    }
}

export { AuthService }