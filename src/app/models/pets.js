import uploadDeArquivo from '../../app/infraestrutura/upload'
import repositoryPets from '../../repository/Pets'

class Pet {

    add(pet){
        
        uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
            
            const novoPet = {nome: pet.nome, imagem: novoCaminho}

            return repositoryPets.add(novoPet)
            .then((result)=>{
                const id = result.insertId
                return {...novoPet, id}
            })
        })  
    }
}

export default new Pet()


