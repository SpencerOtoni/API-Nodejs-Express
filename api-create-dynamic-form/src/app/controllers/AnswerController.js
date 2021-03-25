import * as Yup from 'yup'
import Form from '../models/Form'
import Question from '../models/Question'
import Answer from '../models/Answer'

import AppError from '../errors/AppError'

class AnswerController {
    async store(req, res) {
        const { data } = req.body

        const schema = Yup.object().shape({
            data: Yup.array(),
        })

        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
            throw new AppError(err)
        }

        if (data.length === 0) {
            throw new AppError(
                'To save the form, it is necessary to insert the answers'
            )
        }

        /* const answerAddQuestionId = data.map((element) => ({
            ...element,
            question_id: element.id,
        })) */

        const { id } = await Answer.bulkCreate(data, {
            returning: true,
        })

        return res.json({
            id,
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
                    attributes: ['id', 'question'],
                    include: [
                        {
                            model: Answer,
                            as: 'answer',
                            attributes: ['id', 'answer'],
                        },
                    ],
                },
            ],
        })

        if (questionForm.user_id !== req.userId) {
            throw new AppError(
                'You do not have permission to access this form.',
                401
            )
        }

        const { question } = questionForm

        const existAnswer = question.some(({ answer }) => answer.length > 0)

        if (!existAnswer) {
            throw new AppError('There are no registered answer.')
        }

        return res.json({
            questionForm,
        })
    }
}

export default new AnswerController()
