'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('home');
    res.render('home/index');
});

router.get('/login', (req, res) => {
    console.log('login');
    res.render('home/login');
});

module.exports = router;
