const db = require('../models');

const Course = db.course

const getList = async (req, res) => {
    const reviews = await Course.findAll({})
    res.status(200).send(reviews)
}

module.exports = {
    getList,
}