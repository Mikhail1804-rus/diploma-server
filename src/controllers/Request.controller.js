const db = require('../models');


const add = async (req, res) => {
    const Request = db.request

    console.log(req.body);

    const review = await Request.create({
        name: req.body.name,
        fio: req.body.fio,
        email: req.body.email,
        phone: req.body.phone,
        text: req.body.text,
    })
    res.status(200).send(review)
}

module.exports = {
    add,
}