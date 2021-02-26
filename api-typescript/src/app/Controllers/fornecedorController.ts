import { Request, Response } from 'express'
import * as Yup from "yup";
import Fornecedor from '../models/Fornecedor'

class FornecedorController {
    async store(req: Request, res: Response){
        console.log(req.body)
        const schema = Yup.object().shape({
            empresa: Yup.string().required(),
            email: Yup.string().email().required(),
            categoria: Yup.string().required(),
          });
      
        if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails.' });
        }

        const userCompany = await Fornecedor.findOne({ where: { email: req.body.email } });

        if (userCompany) {
        return res.status(400).json({ error: 'Company already exists.' });
        }

        const  {empresa, email, categoria} = await Fornecedor.create(req.body)

        return res.json({
            empresa,
            email,
            categoria
        })
    }

    async show(req: Request, res: Response){
        const companies = await Fornecedor.findAll()

        if(companies.length === 0){
            return res.status(401).json({
                error: 'Companies not found.'
            })
        }

        return res.json(companies)
    }

    async index(req: Request, res: Response){
        const { id } = req.params
        const  company = await Fornecedor.findOne({
            where: {
                id
            }
        })

        if(!company){
            return res.status(401).json({ error: 'Company not found.' });
        }

        return res.json(company)
    }
    
    async update(req: Request, res: Response){
        const { id } = req.params;
       /* const  resultados = await Fornecedor.afterBulkUpdate(
            id,
            {
                
            }
        )*/

        //return res.json(resultados)
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        const company = await Fornecedor.findByPk(id)

        if(!company){
            return res.status(401).json({ error: 'Company not found.' });
        }

        company.destroy();

        return res.json(company)
    }
}

export { FornecedorController }