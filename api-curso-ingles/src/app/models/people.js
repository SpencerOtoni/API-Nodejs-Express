import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class People extends Model {
        static associate(models) {
            this.hasMany(models.Classes, {
                foreignKey: 'docente_id',
                as: 'docente',
            })
            this.hasMany(models.Enrollments, {
                foreignKey: 'estudante_id',
                as: 'estudante',
            })
        }
    }
    People.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'People',
        }
    )
    return People
}
