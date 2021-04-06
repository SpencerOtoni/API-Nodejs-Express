module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define(
        'Person',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
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
