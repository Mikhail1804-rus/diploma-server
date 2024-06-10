const controller = require('../controllers/Course.controller');
const router = require('express').Router();

router.get('/getList', controller.getList)

module.exports = router;