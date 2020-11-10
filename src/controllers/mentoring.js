const express = require('express');
const router = express.Router();
const db = require('./../models/');
const logger = require('./../utils/logger');

router.get('/mentorings', async(req, res, next) => {
    db.mentorings.findAll({
        attributes: ['id','number', 'name','content']
    }).then( result => {
        res.json(result);
        
    });
});

router.post('/mentorings', async(req, res) => {
    console.log(req.headers);
    console.log(req.body);

    db.mentorings.create({
        number: req.body.number,
        name: req.body.name,
        content: req.body.content,
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