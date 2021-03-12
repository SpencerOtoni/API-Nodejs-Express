import * as Yup from 'yup'
import Form from '../models/Form'
import Question from '../models/Question'

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

        const { id } = await Form.create({
            title,
            user_id: Number(req.userId),
        })

        const formAndUserInclude = await Form.findByPk(id, { include: 'user' })

        /* const { data } = req.body

        if (data.length > 0) {
            return res.json({ error: 'Inserir perguntas!' })
            // throw new AppError('User already exist.')
        } */

        const data = [
            { question: 'Pergunta 01' },
            { question: 'Pergunta 02' },
            { question: 'Pergunta 03' },
        ]

        const questionAddFomr_id = data.map((element) => {
            element.question
        })

        const question = await Question.bulkCreate(questionAddFomr_id, {
            returning: true,
        })

        return res.json({
            formAndUserInclude,
            question,
        })
    }
}

export default new FormController()

/*
{"title":"Formulário 01",
 "data": [{"question":"Pergunta 01"},{"question":"Pergunta 02"},{"question":"Pergunta 03"}]
}
*/

/* const fabricante = await Fabricante.findByPk(resultadoCreate.id, {include: Produto});
//console.log(fabricante);
const produtos = await fabricante.getProdutos();
console.log(produtos);
*/
