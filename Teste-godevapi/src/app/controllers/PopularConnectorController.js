import path from 'path'
import Connector from '../models/connector'

import AppError from '../errors/AppError'

class PopularConnectorController {
    async store(req, res) {
        try {
            return res.status(201).json({
                name: 'Conector 01',
                category: 'Prémio',
                description: 'Descrição conector 01',
                type: 'REST',
                privacy: 'PUBLIC',
                logo_URL: path.resolve(
                    __dirname,
                    '..',
                    '..',
                    '..',
                    'tmp',
                    'uploads'
                ),
                base_URL: process.env.APP_URL,
            })
        } catch (err) {
            throw new AppError(err)
        }
        /*
         {
            name: 'Conector 01',
            category: 'Prémio',
            description: 'Descrição conector 01',
            type: 'REST',
            privacy: 'PUBLIC'.
            logo_URL: path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
            base_URL: process.env.APP_URL,
        },
        {
            name: 'Conector 02',
            category: 'Básico',
            description: 'Descrição conector 02',
            type: 'BD',
            privacy: 'PUBLIC'.
            logo_URL: path,
            base_URL: process.env.APP_URL,
        },
        {
            name: 'Conector 03',
            category: 'Básico',
            description: 'Descrição conector 03',
            type: 'SOAP',
            privacy: 'PRIVATE'.
            logo_URL: path,
            base_URL: process.env.APP_URL,
        },
        {
            name: 'Conector 04',
            category: 'Prémio',
            description: 'Descrição conector 04',
            type: 'REST',
            privacy: 'PRIVATE'.
            logo_URL: path,
            base_URL: process.env.APP_URL,
        },
        {
            name: 'Conector 05',
            category: 'Básico',
            description: 'Descrição conector 05',
            type: 'BD',
            privacy: 'PRIVATE'.
            logo_URL: path,
            base_URL: process.env.APP_URL,
        },
        {
            name: 'Conector 06',
            category: 'Básico',
            description: 'Descrição conector 06',
            type: 'SOAP',
            privacy: 'PUBLIC'.
            logo_URL: path,
            base_URL: process.env.APP_URL,
        }

        const connectors = await Connector.create([])

        return res.status(201).json(connectors)
        */
    }
}

export default new PopularConnectorController()
