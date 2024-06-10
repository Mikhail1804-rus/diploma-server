const {Sequelize, DataTypes} = require("sequelize");
const dbConfig = require("../../config/dbConfig");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    pool: dbConfig.pool
});


sequelize.authenticate()
    .then(() => {
        console.log('Соединение с БД было успешно установлено')
    })
    .catch((e) => {
        console.log('Невозможно выполнить подключение к БД: ', e)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.review = require('./Review.model')(sequelize, DataTypes)
db.timesheet = require('./Timesheet.model')(sequelize, DataTypes)
db.course = require('./Course.model')(sequelize, DataTypes)
db.request = require('./Request.model')(sequelize, DataTypes)

db.sequelize.sync()
    .then(() => {
        console.log('sync completed')
    })
    .catch((e) => {
        console.error(`sync failed: ${e}`)
    })

module.exports = db