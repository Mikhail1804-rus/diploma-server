const db = require("./index");

module.exports = (sequelize, DataTypes) => {
    const Timesheet = sequelize.define("timesheet", {
        dates: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        courseName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Timesheet
}