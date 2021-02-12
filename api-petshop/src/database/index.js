import Sequelize from 'sequelize';

import Fornecedor from '../app/models/Fornecesor'

import databaseConfig from '../config/database';

const models = [Fornecedor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
  }

}

export default new Database();