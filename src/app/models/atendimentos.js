import { format, parseISO } from 'date-fns'
import axios from 'axios'

import repositoryAtendimento from '../../repository/Atendimentos'

class Atendimento{

    add(atendimento) {
        const data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss')
        const dataCriacao = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
   
        const atendimentoModificado = {...atendimento, dataCriacao, data}

        return repositoryAtendimento.add(atendimentoModificado)
        
        /* const sql = 'INSERT INTO Atendimentos SET ?'
        this.conexao.query(sql, atendimentoModificado, (erro, resultados) => {
            if(erro) {
                return res.status(400).json(erro)
            }
            
            return res.status(200).json(atendimento)
        }) */
    }

    listAtendimento(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${Number(id)}`
      
        this.conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if(erro) {
                return res.status(400).json(erro)
            }

            const { data } = await axios.get(`http://localhost:8082/${cpf}`)
            atendimento.cliente = data

            return res.status(200).json(atendimento)
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