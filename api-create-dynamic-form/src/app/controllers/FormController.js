import * as Yup from 'yup'
import Form from '../models/Form'
import Question from '../models/Question'
import User from '../models/User'

// import AppError from '../errors/AppError'

class FormController {
    async store(req, res) {
        const { title } = req.body
        const { data } = req.body

        const schema = Yup.object().shape({
            title: Yup.string().required('Title is mandatory!'),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            return res.json({ error: 'Title is mandatory!' })
            // throw new AppError(err)
        }

        const formExists = await Form.findOne({ where: { title } })

        if (formExists) {
            return res.json({ error: 'Form already exist.' })
            // throw new AppError('User already exist.')
        }

        if (data.length === 0) {
            return res.json({
                error:
                    'To save the form, it is necessary to insert a question.',
            })
            // throw new AppError('User already exist.')
        }

        const { id } = await Form.create({
            title,
            user_id: Number(req.userId),
        })

        const questionAddFomrId = data.map((element) => ({
            ...element,
            form_id: Number(id),
        }))

        const question = await Question.bulkCreate(questionAddFomrId, {
            returning: true,
        })

        return res.json({
            id,
            title,
            // question,
        })
    }

    async show(req, res) {
        const userAndForm = await User.findByPk(req.userId, {
            order: ['createdAt'],
            attributes: ['id', 'name'],
            include: [
                {
                    model: Form,
                    as: 'form',
                    attributes: ['id', 'title', 'createdAt'],
                },
            ],
        })

        return res.json({
            userAndForm,
        })
    }

    async index(req, res) {
        const { id } = req.params
        // const formAndUserInclude = await Form.findByPk(id, { include: 'user' })
        const questionForm = await Form.findByPk(id, {
            attributes: ['id', 'title'],
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['id', 'question'],
                },
            ],
        })

        return res.json({
            // formAndUserInclude,
            questionForm,
        })
    }
}

export default new FormController()

/*
{"title":"Formulário 01",
 "data": [{"question":"Pergunta 01"},{"question":"Pergunta 02"},{"question":"Pergunta 03"}]
}
*/
