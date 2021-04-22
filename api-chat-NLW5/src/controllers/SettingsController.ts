import { Request, Response} from 'express'

import { SettingsServices } from '../services/SettingsServices'

class SettingsController{
    async create(req: Request, res: Response){
        const { chat, username } = req.body

        const settingsServices = new SettingsServices()

        const setting = await settingsServices.create({chat, username})

        return res.status(201).json(setting)
    }
}


export { SettingsController }
