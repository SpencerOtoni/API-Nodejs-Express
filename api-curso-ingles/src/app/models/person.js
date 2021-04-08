import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class person extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.classes, {
                foreignKey: 'docente_id',
                as: 'docente',
            })
            this.hasMany(models.enrollments, {
                foreignKey: 'estudante_id',
                as: 'estudante',
            })
        }
    }
    person.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'person',
        }
    )
    return person
}
