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

    async findByUsername(username: string){
        const settings = this.settingsRepository.findOne({
            username
        })

        return settings
    }

    async update({ username, chat }: ISettingsCreate) {
        await this.settingsRepository.createQueryBuilder()
            .update(Setting)
            .set({ chat })
            .where("username = username", {
                username
            })
            .execute()
        /* let settings = await this.settingsRepository.findOne({ username });
        if (!settings) {
          throw new AppError("Setting not found",144);
        }

        settings.chat = chat;

        await this.settingsRepository.save(settings);

        return settings;
        */
    }
}


export { SettingsServices }
