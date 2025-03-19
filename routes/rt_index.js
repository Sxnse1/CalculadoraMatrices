const express = require('express');
const router = express.Router();


router.use('/', require('./rt_routes'));
router.use('/', require('./views'));

module.exports = router;