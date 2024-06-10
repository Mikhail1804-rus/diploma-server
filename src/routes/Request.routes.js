const controller = require('../controllers/Request.controller');
const router = require('express').Router();

router.post('/add', controller.add)

module.exports = router;