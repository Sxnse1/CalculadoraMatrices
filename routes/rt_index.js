const express = require('express');
const router = express.router();


router.get('/', require('./rt_routes'));
router.get('/', require('./views'));

module.exports = router