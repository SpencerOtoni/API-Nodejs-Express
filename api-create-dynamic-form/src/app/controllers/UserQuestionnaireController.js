import Form from '../models/Form'
import Question from '../models/Question'

import AppError from '../errors/AppError'

class UserQuestionnaireController {
    async index(req, res) {
        const { token } = req.params

        const questionForm = await Form.findOne({
            where: { token },
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

        return res.json({
            questionForm,
        })
    }
}

export default new UserQuestionnaireController()
