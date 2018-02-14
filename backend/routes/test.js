var express = require('express');
var router = express.Router();
var test = require('../test.json');

router.get('/', function (req, res, next) {
    res.send(test)
});

router.get('/:id', function (req, res, next){
    var id = parseInt(req.params.id, 10);
    var test_iter = test.filter(function (test_iter) {
        return test_iter.id === id;
    });
    res.send(test_iter)
});

module.exports = router;