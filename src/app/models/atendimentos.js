import { format, parseISO } from 'date-fns'
import axios from 'axios'

import repositoryAtendimento from '../../repository/Atendimentos'

class Atendimento{

    async add(atendimento) {
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
        
        return repositoryAtendimento.listAtendimento(id)
            .then( async(result)=>{
                const atendimento = result[0]
                const { cliente } = atendimento

                const { data } = await axios.get(`http://localhost:8082/${cliente}`)
                atendimento.cliente = data
    
                return atendimento
            })
    }

    async listAtendimentos(){
        
        return repositoryAtendimento.listAtendimentos()
    }

    async update(id, atendimento){

        if(atendimento.data){
            atendimento.data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss')
        }

        return repositoryAtendimento.update(atendimento, id)
            .then((result)=>{
                return {...atendimento ,id}
            })
    }

    delete(id){
        
        return repositoryAtendimento.delete(id)
            .then((result)=> {
                return {id}
            })
    }
}

export default new Atendimento()