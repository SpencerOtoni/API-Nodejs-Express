import Sequelize, { Model } from 'sequelize'

class Question extends Model {
    static init(sequelize) {
        super.init(
            {
                answer: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Question, {
            foreignKey: 'question_id',
            as: 'question',
        })
    }
}

export default Question
