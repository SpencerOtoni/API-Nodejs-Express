import { getCustomRepository } from 'typeorm'
import { UserSRepository } from '../repositories/UsersRepository'

class UsersService {
    async create(email: string){
        const userSRepository = getCustomRepository(UserSRepository)

        const userExists = await userSRepository.findOne({
            email
        })

        if(userExists){
            return userExists
        }

        const user = userSRepository.create({
            email
        })

        await userSRepository.save(user)

        return user
    }
}

export { UsersService }
