import Sequelize from 'sequelize';

class TabelaFornecedor {
  
  static init(sequelize) {
    this.sequelize = sequelize
   
  } 

  static teste(){
    const fornecedor = this.sequelize.define('fornecedor', 
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

  return fornecedor;
}

}

export default TabelaFornecedor;