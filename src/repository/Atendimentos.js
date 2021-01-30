import database from '../database'

class Atendimentos {
    add(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        return database.executaQuery(sql, atendimento)
    }
}

export default new Atendimentos()