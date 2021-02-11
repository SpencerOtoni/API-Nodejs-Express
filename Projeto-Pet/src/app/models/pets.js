import uploadDeArquivo from '../../config/upload';
import repositoryPets from '../../repository/Pets';

class Pet {
  async add(pet) {
    return uploadDeArquivo(pet.imagem, pet.nome, async (novoCaminho) => {
      const novoPet = await { ...pet, imagem: novoCaminho };

      return repositoryPets.add(novoPet).then((result) => {
        const id = result.insertId;
        return { ...novoPet, id };
      });
    });
  }
}

export default new Pet();
