const db = require('../models');

const Timesheet = db.timesheet

const getList = async (req, res) => {
    const reviews = await Timesheet.findAll({})
    res.status(200).send(reviews)
}

module.exports = {
    getList,
}