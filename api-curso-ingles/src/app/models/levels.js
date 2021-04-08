import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class levels extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.classes, {
                foreignKey: 'nivel_id',
                as: 'nivel',
            })
        }
    }
    levels.init(
        {
            descr_level: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'levels',
        }
    )
    return levels
}
