import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyUserRepository } from "../repositories/SurveysUsersRepository";

class NpsController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;

        const SurveysRepository = getCustomRepository(SurveyUserRepository);

        const surveysUsers = await SurveysRepository.find({ 
            where : {suridvey_id : id}
        });

        const detractor = surveysUsers.filter((survey) => {
            return survey.value >= 0 && survey.value <= 6
        }).length;

        const promoters = surveysUsers.filter((survey) => {
            return survey.value >= 9 && survey.value <= 10
        }).length;

        const passive = surveysUsers.filter((survey) => {
            return survey.value >= 7 && survey.value <= 8
        }).length;

        const totalAnswers = surveysUsers.length;

        const calculate = (promoters - detractor) / totalAnswers;

        return res.json({
            detractor,
            promoters,
            passive,
            totalAnswers,
            nps: calculate
        })
    }
}

export { NpsController }