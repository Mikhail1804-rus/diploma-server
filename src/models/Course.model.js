const db = require("./index")

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT
        }
    })

    return Course
}