import Sequelize, { Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'

class Form extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                token: Sequelize.UUID,
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'form',
            }
        )

        this.addHook('beforeSave', async (form) => {
            form.token = uuidv4()
        })

        return this
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }),
            this.hasMany(models.Question, {
                foreignKey: 'form_id',
                as: 'question',
            })
    }
}

export default Form
