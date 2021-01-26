import Pets from '../models/pets'

class PetsController {
    async store(req, res){
        const pet = req.body

        await Pets.add(pet, res)
    }
}

export default new PetsController()