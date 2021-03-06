const express = require('express');
const router = express.Router();
const db = require('./../models/');
const logger = require('./../utils/logger');

router.get('/mentorings', (req, res, next) => {
    db.mentoring.findAll({
        attributes: ['id','number', 'name','content']
    }).then( result => {
        res.json(result);
        
    });
});

router.post('/mentorings', async(req, res) => {
    console.log(req.body);

    db.mentoring.create({
        number: req.body.number,
        name: req.body.name,
        content: req.body.content,
    
    })
    .then( result => {
        logger.info("데이터 추가 완료");
        res.redirect('/mentorings');
    })
    .catch( err => {
        console.log(err);
    })
    });
    

module.exports = router;