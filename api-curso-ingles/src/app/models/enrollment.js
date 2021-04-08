import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class enrollment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.person, {
                foreignKey: 'estudante_id',
                as: 'estudante',
            })
            this.belongsTo(models.classes, {
                foreignKey: 'turma_id',
                as: 'turma',
            })
        }
    }
    enrollment.init(
        {
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'enrollment',
        }
    )
    return enrollment
}
