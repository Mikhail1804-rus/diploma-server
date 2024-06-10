const db = require("./index")

module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("request", {
        fio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.BIGINT
        },
        text: {
            type: DataTypes.BIGINT
        }
    })

    return Request
}