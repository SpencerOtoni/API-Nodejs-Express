import Sequelize, { Model } from 'sequelize'

class Form extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                created_at: Sequelize.DATE,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

export default Form
