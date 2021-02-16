import Fornecedor from '../models/Fornecedor'

class FornecedorController {
    async store(req, res){
        const  resultados = await Fornecedor.findAll()

        return res.json(resultados)
    }
}

export default new FornecedorController()