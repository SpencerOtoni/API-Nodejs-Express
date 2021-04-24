import { getCustomRepository, Repository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'
import { AppError } from '../errors/AppError'
import { Setting } from '../models/Setting'

interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingsServices{
    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }
    async create({chat, username} : ISettingsCreate){

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new AppError("User already exist!")
        }
        const setting = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(setting)

        return setting
    }
}


export { SettingsServices }
