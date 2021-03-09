import Sequelize from 'sequelize'

import User from '../app/models/User'
import Form from '../app/models/Form'
import Question from '../app/models/Question'
import Answer from '../app/models/Answer'

import databaseConfig from '../config/database'

const models = [User, Form, Question, Answer]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)

        this.connection
            .authenticate()
            .then(() => console.log('Sucesso Conexo'))
            .catch(console.log('Sucesso Conexo'))

        models
            .map((model) => model.init(this.connection))
            .map((model) => model.associate && model.associate(this.connection))
    }
}

export default new Database()
