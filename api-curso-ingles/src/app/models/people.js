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
            name: {
                type: DataTypes.STRING,
                validate: {
                    validaName(name) {
                        if (name.length < 3)
                            throw new Error(
                                'Campo nome deve ter mais de 3 caracteres.'
                            )
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    args: true,
                    msg: 'Formato de email inválido.',
                },
            },
            role: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
        },
        {
            /* defaultScope: {
                where: {
                    active: true,
                },
            }, */
            sequelize,
            modelName: 'People',
        }
    )
    return People
}
