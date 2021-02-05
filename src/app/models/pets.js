import uploadDeArquivo from '../../app/infraestrutura/upload'
import repositoryPets from '../../repository/Pets'

class Pet {

    async add(pet){
        
        await uploadDeArquivo(pet.imagem, pet.nome, async (novoCaminho) => {
            
            const novoPet = await {nome: pet.nome, imagem: novoCaminho}
            
            return repositoryPets.add(novoPet)
            .then((result)=>{
                const id = result.insertId
                return {...novoPet, id}
            })
        })  
    }
}

export default new Pet()


