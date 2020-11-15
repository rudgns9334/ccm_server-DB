const express = require('express');
const router = express.Router();
const db = require('./../models/');
const logger = require('./../utils/logger');

router.get('/testcases', (req, res, next) => {
    db.testcase.findAll({
        attributes: ['number', 'input','output']
    }).then( result => {
        res.json(result);
        
    });
});

router.post('/testcases', async(req, res) => {
    console.log(req.body);

    db.testcase.create({
        number: req.body.number,
        input: req.body.input,
        output: req.body.output,
    
    })
    .then( result => {
        logger.info("데이터 추가 완료");
        res.redirect('/testcases');
    })
    .catch( err => {
        console.log(err);
    })
    });
    

module.exports = router;