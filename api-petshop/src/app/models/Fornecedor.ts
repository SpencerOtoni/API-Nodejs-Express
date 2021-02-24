import Sequelize, { Model } from 'sequelize';

import database from '../../database'

class Fornecedor extends Model {
  
  public empresa!: string;
  public email!: string;
  public categoria!: string;


}

Fornecedor.init(
  {
    empresa : {
      type : Sequelize.STRING,
      allowNull : false
    },
    email : {
      type : Sequelize.STRING,
        allowNull : false
    },
    categoria : {
        type : Sequelize.ENUM('ração', 'brinquedos'),
        allowNull : false
    }
  },
  {
    sequelize: database,
    freezeTableName: true,
    tableName: 'fornecedores',
    version: 'versao'
  }
)

export default Fornecedor;


