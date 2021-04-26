import { Request, Response} from 'express'

import { SettingsServices } from '../services/SettingsServices'

class SettingsController{
    async create(req: Request, res: Response): Promise<Response> {
        const { chat, username } = req.body

        const settingsServices = new SettingsServices()

        const setting = await settingsServices.create({chat, username})

        return res.status(201).json(setting)
    }

    async findByUsernameshow(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;

        const settingsService = new SettingsServices();
        const settings = await settingsService.findByUsername(username);

        return response.json(settings);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const { chat } = request.body;

        const settingsService = new SettingsServices();
        const settings = await settingsService.update({ username, chat });

        return response.json(settings);
      }
}


export { SettingsController }
