import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class classes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.person, {
                foreignKey: 'docente_id',
                as: 'docente',
            })
            this.belongsTo(models.levels, {
                foreignKey: 'nivel_id',
                as: 'nivel',
            })
            this.hasMany(models.enrollment, {
                foreignKey: 'turma_id',
                as: 'turma',
            })
        }
    }
    classes.init(
        {
            data_inicio: DataTypes.DATEONLY,
        },
        {
            sequelize,
            modelName: 'classes',
        }
    )
    return classes
}
