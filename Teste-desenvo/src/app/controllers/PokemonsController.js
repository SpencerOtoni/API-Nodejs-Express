import Pokemons from '../models/Pokemons'
import Types from '../models/Types'

class PokemonsController {
  async store(req, res) {
    const {
      name,
      pokedex_number,
      generation,
      evolution,
      family_id,
      type_1,
      type_2,
      weather_1,
      weather_2,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      cp1,
    } = req.body

    const pokemon = Pokemons.create({
      name,
      pokedex_number,
      generation,
      evolution,
      family_id,
      type_1,
      type_2,
      weather_1,
      weather_2,
      stat_total,
      atk,
      def,
      sta,
      legendary,
      cp1,
    })

    return res.json(pokemon)
  }
}

export default new PokemonsController()
