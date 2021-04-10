import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Enrollments extends Model {
        static associate(models) {
            this.belongsTo(models.People, {
                foreignKey: 'estudante_id',
                as: 'estudante',
            })
            this.belongsTo(models.Classes, {
                foreignKey: 'turma_id',
                as: 'turma',
            })
        }
    }
    Enrollments.init(
        {
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Enrollments',
        }
    )
    return Enrollments
}
