import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Levels extends Model {
        static associate(models) {
            this.hasMany(models.Classes, {
                foreignKey: 'niveis_id',
                as: 'nivel',
            })
        }
    }
    Levels.init(
        {
            descr_level: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Levels',
        }
    )
    return Levels
}
