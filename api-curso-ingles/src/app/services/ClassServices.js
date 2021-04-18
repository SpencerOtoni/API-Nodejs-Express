import Services from './Sevices'
import database from '../models'

class ClassService extends Services {
    constructor() {
        super('Classes')
    }

    async getRegistrosAtivos(where = {}) {
        return database[this.model].scope('getAll').findAll({
            where: { ...where },
        })
    }
}

export default ClassService
