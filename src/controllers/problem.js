const express = require('express');
const router = express.Router();
const db = require('./../models/');
const logger = require('./../utils/logger');
const jjss = express.json();


router.get('/problems', async(req, res, next) => {
    db.problem.findAll().then( result => {
        res.json(result);
        
    });
});

router.post('/problems', async(req, res) => {
    console.log(req.headers);
    console.log(req.body);

    db.problem.create({
        number: req.body.number,
        name: req.body.name,
        professor: req.body.professor,
        try: req.body.try,
    })
    .then( result => {
        logger.info("데이터 추가 완료");
        res.redirect('/problems');
    })
    .catch( err => {
        logger.info(err);
    })
    });
    

module.exports = router;