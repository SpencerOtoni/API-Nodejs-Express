import uploadDeArquivo from '../../config/upload'

class Pets {
    init(conexao){
        this.conexao = conexao
    }

    add(pet, res){
        const sql = 'INSERT INTO Pets SET ?'

        uploadDeArquivo()
        this.conexao.query(sql, pet, (erro) =>{
            if(erro){
               return res.status(400).json(erro)
            }

            return res.status(200).json(pet)
        })
    }
}

export default new Pets()


