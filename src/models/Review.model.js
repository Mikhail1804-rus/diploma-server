const db = require("./index")

module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER
        },
    })

    return Review
}