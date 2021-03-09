import Sequelize, { Model } from 'sequelize'

class Question extends Model {
    static init(sequelize) {
        super.init(
            {
                question: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Form, { foreignKey: 'form_id', as: 'form' })
    }
}

export default Question
