import Sequelize, { Model } from 'sequelize';

import database from '../../database'

class Fornecedor extends Model {
  
  public empresa!: string;
  public email!: string;
  public categoria!: string;
  public readonly createAt: Date;
  public readonly updateAt: Date;

}

Fornecedor.init(
  {
    empresa : Sequelize.STRING,
    email : Sequelize.STRING,
    categoria : Sequelize.ENUM('ração', 'brinquedos'),
  },
  {
    sequelize: database,
    freezeTableName: true,
    tableName: 'fornecedores',
    version: 'versao'
  }
)

export default Fornecedor;


