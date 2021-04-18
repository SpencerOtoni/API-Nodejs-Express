import database from '../models'

class Services {
    constructor(nameModel) {
        this.model = nameModel
    }

    getRegistros(where = {}) {
        return database[this.model].findAll({
            where: { ...where },
        })
    }

    createRegistro(dados) {
        return database[this.model].create(dados)
    }

    getOneRegistro(id) {
        return database[this.model].findOne({
            where: { id },
        })
    }

    updateRegistro(dados, id) {
        return database[this.model].update(dados, {
            where: { id },
        })
    }

    deleteRegistro(id) {
        return database[this.model].update(
            { active: false },
            {
                where: { id },
            }
        )
    }
}

export default Services
