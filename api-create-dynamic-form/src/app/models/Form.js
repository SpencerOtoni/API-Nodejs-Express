import Sequelize, { Model } from 'sequelize'

class Form extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'form',
            }
        )

        return this
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'id', as: 'user' })
    }
}

export default Form
