import databaseConfig from '../config/database'
import tabelaAtendimentos from '../app/infraestrutura/tabela-atendimentos'
import Atendimentos from '../app/models/atendimentos'

const models = [tabelaAtendimentos, Atendimentos]

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