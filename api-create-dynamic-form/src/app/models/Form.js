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
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }),
            this.hasMany(models.Question, { foreignKey: 'form_id', as: 'form' })
    }
}

export default Form
