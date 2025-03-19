const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {title: 'Calculadora de matrices'});
});

module.exports = router;