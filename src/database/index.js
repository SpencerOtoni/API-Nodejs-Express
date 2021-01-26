import databaseConfig from '../config/database'
import tabelaAtendimentos from '../app/infraestrutura/tabelas'
import Atendimentos from '../app/models/atendimentos'
import Pets from '../app/models/pets'

const models = [tabelaAtendimentos, Atendimentos, Pets]

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.connection = databaseConfig
        models.map((model) => { model.init(this.connection) })
    }
}

export default new Database()