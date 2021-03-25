import Types from '../models/Types'

import AppError from '../errors/AppError'

class TypesController {
  async index(req, res) {
    const { id } = req.params

    const types = await Types.findByPk(id, {
      order: ['name'],
      attributes: ['id', 'name'],
      include: [
        {
          model: Pokemons,
          as: 'type1',
          attributes: [
            'name',
            'generation',
            'legendary',
            'stat_total',
            'atk',
            'def',
            'sta',
            'cp39',
            'cp40',
          ],
        },
      ],
    })

    if (!types) {
      throw new AppError('Type not found')
    }

    return res.json(types)
  }

  async show(req, res) {
    const types = await Types.findAll({
      order: ['name'],
      attributes: ['id', 'name'],
      include: [
        {
          model: Pokemons,
          as: 'type1',
          attributes: [
            'name',
            'generation',
            'legendary',
            'stat_total',
            'atk',
            'def',
            'sta',
            'cp39',
            'cp40',
          ],
        },
      ],
    })

    /* const { form } = userAndForm

    if (form.length === 0) {
      throw new AppError('There are no registered forms.')
    } */

    return res.json({
      types,
    })
  }

  async update(req, res) {
    const { id } = req.params

    const type = await Weather.findByPk(id)
    if (!type) {
      return res.status(400).json({ error: 'Weather not found' })
    }

    const update = await type.update(req.body)

    return res.json(update)
  }
}

export default new TypesController()
