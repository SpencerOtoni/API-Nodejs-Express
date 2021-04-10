import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Levels extends Model {
        static associate(models) {
            this.hasMany(models.Classes, {
                foreignKey: 'nivel_id',
                as: 'nivel',
            })
        }
    }
    Levels.init(
        {
            descr_level: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Levels',
        }
    )
    return Levels
}
