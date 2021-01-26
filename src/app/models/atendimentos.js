import { format, parseISO } from 'date-fns'

class Atendimento{
    init(conexao){
        this.conexao = conexao
    }


    add(atendimento, res) {
        const data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss')
        const dataCriacao = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
   
        const atendimentoModificado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        this.conexao.query(sql, atendimentoModificado, (erro, resultados) => {
            if(erro) {
                return res.status(400).json(erro)
            }

            return res.status(200).json(atendimento)
        })
    }

    listAtendimento(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${Number(id)}`
      
        this.conexao.query(sql, (erro, resultados) => {
            if(erro) {
                return res.status(400).json(erro)
            }

            return res.status(200).json(resultados[0])
        })

    }

    listAtendimentos(res){
        const sql = 'SELECT * FROM Atendimentos'

        this.conexao.query(sql, (erro, resultados) => {
            if(erro) {
                return res.status(400).json(erro)
            }

            return res.status(200).json(resultados)
        })
    }

    update(id, atendimento, res){
        const sql = 'UPDATE Atendimentos set ? WHERE id=?'

        if(atendimento.data){
            atendimento.data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss')
        }

        this.conexao.query(sql, [atendimento, Number(id)], (erro, resultados) =>{
            if(erro){
                return res.status(400).json(erro)
            }

            return res.status(200).json({...atendimento ,id})
        })

    }

    delete(id, res){
        const sql = `DELETE FROM Atendimentos WHERE id=${Number(id)}`

        this.conexao.query(sql, (erro, resultados) =>{
            if(erro){
                return res.status(400).json(erro)
            }

            return res.status(200).json(id)
        })
        
    }
}

export default new Atendimento()