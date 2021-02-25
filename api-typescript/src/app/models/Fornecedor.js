import Sequelize from 'sequelize';
import database from '../../config/database'

const fornecedor = database.define('fornecedor', 
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
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
  }
)


export default fornecedor;