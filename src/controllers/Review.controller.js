const db = require('../models');

const Review = db.review

const getList = async (req, res) => {
    const reviews = await Review.findAll({})
    res.status(200).send(reviews)
}

module.exports = {
    getList,
}