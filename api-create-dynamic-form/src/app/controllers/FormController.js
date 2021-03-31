import * as Yup from 'yup'
import Form from '../models/Form'
import Question from '../models/Question'
import User from '../models/User'

import AppError from '../errors/AppError'

class FormController {
    async store(req, res) {
        const { title, data } = req.body

        const schema = Yup.object().shape({
            title: Yup.string().required('Title is mandatory!'),
            data: Yup.array(),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            throw new AppError(err)
        }

        if (data.length === 0) {
            throw new AppError(
                'To save the form, it is necessary to insert a question.'
            )
        }

        const formExists = await Form.findOne({
            where: { title, user_id: req.userId },
        })

        if (formExists) {
            throw new AppError('Form already exist.')
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

        return res.status(201).json({
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

        const { form } = userAndForm

        if (form.length === 0) {
            throw new AppError('There are no registered forms.')
        }

        return res.json({
            userAndForm,
        })
    }

    async index(req, res) {
        const { id } = req.params

        const questionForm = await Form.findByPk(id, {
            attributes: ['id', 'user_id', 'title'],
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['id', 'question', 'mandatory_field'],
                },
            ],
        })

        if (!questionForm) {
            throw new AppError('Forms does not exist')
        }

        if (questionForm.user_id !== req.userId) {
            throw new AppError(
                'You do not have permission to access this form.',
                401
            )
        }

        return res.json({
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
