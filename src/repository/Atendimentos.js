import query from '../database'

class Atendimentos {
    add(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        
        return query(sql, atendimento)
    }
}

export default new Atendimentos()