import { Request, Response } from 'express'
import * as Yup from 'yup';
import User from '../models/User'

class UserController {
    async store(req: Request, res: Response){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'validation fail.' })
        }

        const user = await User.findOne({ where: { email: req.body.email } })

        if(user){
            return res.status(400).json({ error: 'User already existes.'})
        }

        const { id, name, email } = await User.create(req.body)


        return res.json({
            id,
            name,
            email
        })
    }
}

export { UserController }