import Sequelize, { Model } from 'sequelize';

class Fornecedor extends Model {
  static init(sequelize) {
    super.init(
      {
        
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Fornecedor;