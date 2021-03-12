import Sequelize, { Model } from 'sequelize'

class Question extends Model {
    static init(sequelize) {
        super.init(
            {
                question: Sequelize.STRING,
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'questions',
            }
        )

        return this
    }

    static associate(models) {
        this.hasMany(models.Form, { foreignKey: 'id', as: 'form' })
    }
}

export default Question
