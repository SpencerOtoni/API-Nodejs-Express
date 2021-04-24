import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../models/User'
import { UserSRepository } from '../repositories/UsersRepository'

class UsersService {
    private userSRepository: Repository<User>

    constructor(){
        this.userSRepository = getCustomRepository(UserSRepository)
    }
    async create(email: string){

        const userExists = await this.userSRepository.findOne({
            email
        })

        if(userExists){
            return userExists
        }

        const user = this.userSRepository.create({
            email
        })

        await this.userSRepository.save(user)

        return user
    }
}

export { UsersService }
