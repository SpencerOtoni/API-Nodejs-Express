import { Request, Response } from 'express'
import { getCustomRepository } from "typeorm"
import SendMail from '../jobs/SendMail'
import { SurveysRepository } from "../repositories/SurveysRepository"
import { SurveyUserRepository } from "../repositories/SurveysUsersRepository"
import { UserRepository } from "../repositories/UserRepostiory"
import Queue from '../services/Queue'

class SendMailController{
    async execute(req: Request, res: Response) {

        const { email, survey_id } = req.body

        const usersRepository = getCustomRepository(UserRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const surveysUsersRepository = getCustomRepository(SurveyUserRepository)

        const user = await usersRepository.findOne({ email })

        if(!user){
            return res.status(400).json({
                error: "User does not exist"
            })
        }

        const survey = await surveysRepository.findOne({id: survey_id})

        if(!survey){
            return res.status(400).json({
                error: "User does not exist"
            })
        }

        const surveyUserAlreadyExist = await surveysUsersRepository.findOne({
            where : { user_id: user.id, value: null},
            relations: ["user", "survey"]
        })

        const data = {
            email,
            title : survey.title,
            name: user.name,
            description: survey.description,
            id: surveyUserAlreadyExist ? surveyUserAlreadyExist.id : "",
        }

        if(surveyUserAlreadyExist){
            await Queue.add(SendMail.key, data)

           return res.json(surveyUserAlreadyExist)
        }

        const surveyUser = surveysUsersRepository.create({
            user_id: user.id,
            survey_id
        })
     
        await surveysUsersRepository.save(surveyUser)

        data.id = surveyUser.id
        await Queue.add(SendMail.key, data)

        return res.json(surveyUser)
    }
}

export { SendMailController }
