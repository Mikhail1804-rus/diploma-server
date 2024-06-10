module.exports = {
    HOST: "192.168.112.1",
    USER: 'newuser',
    PASSWORD: '',
    DB: 'diploma',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 100000,
    }
}