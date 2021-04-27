import { Router } from 'express'

import { SettingsController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController'
import { MessagesController } from './controllers/MessagesController'
import {  } from './controllers/UsersMessagesController'


const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post('/setting', settingsController.create)
routes.get('/settings/:username', settingsController.findByUsernameshow);
routes.put('/settings/:username', settingsController.update);


routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)
routes.post('/messages/:id', messagesController.showByUser)

export { routes }
