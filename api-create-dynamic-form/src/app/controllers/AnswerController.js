import Form from '../models/Form'
import Question from '../models/Question'
import Answer from '../models/Answer'

class AnswerController {
    async store(req, res) {
        const { data } = req.body

        if (data.length === 0) {
            return res.json({
                error:
                    'To save the form, it is necessary to insert a question.',
            })
            // throw new AppError('User already exist.')
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
