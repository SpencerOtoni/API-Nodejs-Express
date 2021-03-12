import Sequelize, { Model } from 'sequelize'

class Answer extends Model {
    static init(sequelize) {
        super.init(
            {
                answer: Sequelize.STRING,
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'answer',
            }
        )

        return this
    }

    static associate(models) {
        this.hasMany(models.Question, {
            foreignKey: 'id',
            as: 'question',
        })
    }
}

export default Answer
