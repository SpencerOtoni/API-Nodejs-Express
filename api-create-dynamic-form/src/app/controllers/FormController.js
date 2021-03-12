import * as Yup from 'yup'
import Form from '../models/Form'
// import Question from '../models/Question'

// import AppError from '../errors/AppError'

class FormController {
    async store(req, res) {
        const { title } = req.body

        const schema = Yup.object().shape({
            title: Yup.string().required('Titulo é obrigatório!'),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            return res.json({ error: 'Titulo é obrigatório!' })
            // throw new AppError(err)
        }

        const formExists = await Form.findOne({ where: { title } })

        if (formExists) {
            return res.json({ error: 'Form already exist.' })
            // throw new AppError('User already exist.')
        }

        const data = { ...req.body, user_id: Number(req.userId) }

        const form = await Form.create(data)

        return res.json({
            data,
            form,
        })
    }
}

export default new FormController()
