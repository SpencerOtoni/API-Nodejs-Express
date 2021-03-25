import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

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

        /* this.addHook('beforeSave', async (form) => {
            form.token = await bcrypt.hash(Math.round(Date.now() / 1000), 8)
        })
 */
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
