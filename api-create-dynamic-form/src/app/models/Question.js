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
        this.belongsTo(models.Form, { foreignKey: 'form_id', as: 'form' }),
            this.hasMany(models.Answer, {
                foreignKey: 'question_id',
                as: 'questions',
            })
    }
}

export default Question
