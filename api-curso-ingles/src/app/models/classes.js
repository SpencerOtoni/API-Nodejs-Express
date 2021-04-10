import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Classes extends Model {
        static associate(models) {
            this.belongsTo(models.People, {
                foreignKey: 'docente_id',
                as: 'docente',
            })
            this.belongsTo(models.Levels, {
                foreignKey: 'nivel_id',
                as: 'nivel',
            })
            this.hasMany(models.Enrollments, {
                foreignKey: 'turma_id',
                as: 'turma',
            })
        }
    }
    Classes.init(
        {
            data_inicio: DataTypes.DATEONLY,
        },
        {
            sequelize,
            modelName: 'Classes',
        }
    )
    return Classes
}
