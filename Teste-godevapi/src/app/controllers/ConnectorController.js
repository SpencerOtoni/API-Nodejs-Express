import * as Yup from 'yup'

import Connector from '../models/connector'

import AppError from '../errors/AppError'

class ConnectorController {
    async store(req, res) {
        const { name, type, privacy } = req.body
        const { filename: path } = req.file

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório!'),
            category: Yup.string().required('Categoria é obrigatório!'),
            description: Yup.string().required('Descrição é obrigatório!'),
            type: Yup.string().required('Tipo é obrigatório!'),
            privacy: Yup.string().required('Privacidade é obrigatório!'),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            throw new AppError(err)
        }

        const connector = await Connector.findOne({
            $and: [{ name }, { type }, { privacy }],
        })

        if (connector) {
            throw new AppError('Connector already exists')
        }

        const newConnector = {
            ...req.body,
            logo_URL: path,
            base_URL: process.env.APP_URL,
        }

        const { id } = await Connector.create(newConnector)

        return res.status(201).json({
            id,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const connector = await Connector.findOne({ _id: id })

        if (!connector) {
            throw new AppError('Connector not found.', 401)
        }

        const { name, category, type, privacy, base_URL, logo_URL } = connector
        return res.json({
            name,
            category,
            type,
            privacy,
            imagem: `${base_URL}/connector/${logo_URL}`,
        })
    }

    async index(req, res) {
        const { name, category, type, privacy } = req.query

        const connectors = await Connector.find({
            $or: [{ name }, { type }, { privacy }, { category }],
        })

        if (connectors.length === 0) {
            throw new AppError('There are no registered connectors.')
        }

        return res.json(connectors)
    }

    async update(req, res) {
        const { id } = req.params

        const connector = await Connector.findOne({ _id: id })

        if (!connector) {
            throw new AppError('Connector not found.', 401)
        }

        const { name, type, privacy } = req.body

        const connectorExist = await Connector.findOne({
            $and: [{ name }, { type }, { privacy }],
        })

        if (connectorExist) {
            throw new AppError('Connector already exists.')
        }
        const { _id } = connector

        const newConnector = await Connector.findByIdAndUpdate(_id, req.body, {
            new: true,
        })

        return res.json({
            newConnector,
        })
    }

    async delete(req, res) {
        const { id } = req.params

        const connector = await Connector.findOne({ _id: id })

        if (!connector) {
            throw new AppError('Connector not found.', 401)
        }

        const { _id } = connector

        const { name } = await Connector.findByIdAndUpdate(
            _id,
            { status: false },
            {
                new: true,
            }
        )

        return res.json({
            name,
        })
    }
}

export default new ConnectorController()
