import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'
import { AppError } from '../errors/AppError'

interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingsServices{
    async create({chat, username} : ISettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository)

        const userAlreadyExists = await settingsRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new AppError("User already exist!")
        }
        const setting = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(setting)

        return setting
    }
}


export { SettingsServices }
