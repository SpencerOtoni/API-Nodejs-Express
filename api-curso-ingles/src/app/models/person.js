module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define(
        'Person',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
            },
        },
        {
            freezeTableName: true,
            tableName: 'person',
            timestamps: false,
        }
    )
    Person.associate = function (models) {}
    return Person
}
