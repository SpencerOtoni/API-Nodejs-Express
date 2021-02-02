import { format, parseISO } from 'date-fns'
import axios from 'axios'

import repositoryAtendimento from '../../repository/Atendimentos'

class Atendimento{

    add(atendimento) {
        const data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss')
        const dataCriacao = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
   
        const atendimentoModificado = {...atendimento, dataCriacao, data}

        return repositoryAtendimento.add(atendimentoModificado)
            .then((result)=>{
                const id = result.insertId
                return {...atendimentoModificado, id}
            })
    }

    async listAtendimento(id){
        
        return repositoryAtendimento.listAtendimento(id).then( async(result)=>{
            const atendimento = result[0]
            const { cliente } = atendimento

            const { data } = await axios.get(`http://localhost:8082/${cliente}`)
            atendimento.cliente = data
   
            return atendimento
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