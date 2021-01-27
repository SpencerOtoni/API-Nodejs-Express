import uploadDeArquivo from '../../config/upload'

class Pet {
    init(conexao){
        this.conexao = conexao
    }

    add(pet, res){
        const sql = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
            
            const novoPet = {nome: pet.nome, imagem: novoCaminho}

            this.conexao.query(sql, novoPet, (erro) =>{
                if(erro){
                   return res.status(400).json(erro)
                }
    
                return res.status(200).json(novoPet)
            })
        })  
    }
}

export default new Pet()


