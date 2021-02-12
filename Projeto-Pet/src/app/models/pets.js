// import uploadDeArquivo from '../../config/upload';
import repositoryPets from '../../repository/Pets';

class Pet {
  async add(pet) {
    const { filename: imagem } = pet.imagem;

    const novoPet = { ...pet, imagem };
    return repositoryPets.add(novoPet).then((result) => {
      const id = result.insertId;
      return { imagem: `${process.env.APP_URL}/pet/${novoPet.imagem}`, id };
    });

    /* return uploadDeArquivo(pet.imagem, pet.nome, async (novoCaminho) => {
      const novoPet = await { ...pet, imagem: novoCaminho };
    }); */
  }
}

export default new Pet();
