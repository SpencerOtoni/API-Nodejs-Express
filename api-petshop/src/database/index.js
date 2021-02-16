import databaseConfig from '../config/database';

import tabelaFornecedor from '../app/models/Fornecedor';

const models = [tabelaFornecedor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = databaseConfig;

    models
      .map((model) => model.init(this.connection))
  }

}

export default new Database();