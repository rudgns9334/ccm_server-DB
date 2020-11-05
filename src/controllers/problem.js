const router = require('express').Router();
const db = require('./../models/');


router.get('/problems', async(req, res, next) => {
    db.problems.findAll().then( result => {
        res.json(result);
    });
    
});

router.post('/problems', (req, res) => {
    let body = req.body;

    db.problems.create({
        number: body.number,
        name: body.name,
        professor: body.professor,
        try: body.try,
    })
    .then( result => {
        console.log("데이터 추가 완료");
        res.redirect('/problems');
    })
    .catch( err => {
        console.log("데이터 추가 실패");
    })
    });
    

module.exports = router;