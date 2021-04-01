module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define(
        'Person',
        {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.STRING,
            active: DataTypes.BOOLENA,
        },
        {}
    )
    Person.associate = function (models) {}
    return Person
}
