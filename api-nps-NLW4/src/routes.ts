import { Router } from 'express'

import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController'

const router = Router()

const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()
const npsController = new NpsController()

router.post("/users", userController.create)

router.post("/surveys", surveysController.create)
router.get("/surveys", surveysController.show)

router.post("/sendMail", sendMailController.create)

router.get("/answers/:value", answerController.create)

router.get("/nps/:id", npsController.create)

export { router }