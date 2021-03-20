import Form from '../models/Form'
import Question from '../models/Question'
import Answer from '../models/Answer'

import AppError from '../errors/AppError'

class AnswerController {
    async store(req, res) {
        const { data } = req.body

        if (data.length === 0) {
            throw new AppError(
                'To save the form, it is necessary to insert a question.'
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
        // const formAndUserInclude = await Form.findByPk(id, { include: 'user' })
        const questionForm = await Form.findByPk(id, {
            attributes: ['id', 'title'],
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

        return res.json({
            // formAndUserInclude,
            questionForm,
        })
    }
}

export default new AnswerController()
