const controller = require('../controllers/Timesheet.controller');
const router = require('express').Router();

router.get('/getList', controller.getList)

module.exports = router;