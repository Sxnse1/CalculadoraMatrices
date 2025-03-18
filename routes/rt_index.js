const express = require('express');
const router = express.Router();


router.get('/', require('./rt_routes'));
router.get('/', require('./views'));

module.exports = router;