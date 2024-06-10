const controller = require('../controllers/Review.controller');
const router = require('express').Router();

router.get('/getList', controller.getList)

module.exports = router;