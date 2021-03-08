import { Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveyUserRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {
    async create( req: Request, res:Response ) {
        const { value } = req.params;
        const { u } = req.query;

        const surveysUsersRepository = getCustomRepository(SurveyUserRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        })

        if(!surveyUser){
            throw new AppError('Survey User does not exists!');
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return res.status(201).json(surveyUser)
    }
}

export { AnswerController }