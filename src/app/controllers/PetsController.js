import Pets from '../models/pets'

class PetsController {
    store(req, res){
        const pet = req.body

        Pets.add(pet).then(
            petCadastrado => {  
              res.status(201).json(petCadastrado) 
            }
          ).catch(erro => {
            res.status(400).json(erro)
          })
    }
}

export default new PetsController()