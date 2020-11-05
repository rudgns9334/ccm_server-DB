const models = require('../models/');
const router = require('express').Router();

router.get('/', function (req, res, next) {
    res.send("this is real");
});

module.exports = router;
