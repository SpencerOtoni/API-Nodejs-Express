import Weather from '../models/Weather'

class WeatherController {
  async index(req, res) {
    const { id } = req.params

    const types = await Weather.findByPk(id, {
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

    const weather = await Weather.findByPk(id)
    if (!weather) {
      return res.status(400).json({ error: 'Weather not found' })
    }

    const update = await weather.update(req.body)

    return res.json(update)
  }
}

export default new WeatherController()
