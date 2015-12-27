var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add_room_type', function(req, res, next) {
    res.render('add_room_type', { title: 'Express' });
});

module.exports = router;
