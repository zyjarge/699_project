/**
 * Created by Jarge on 2015/12/27.
 */

var express = require('express');
var router = express.Router();

router.get('/add_room_type', function(req, res, next) {
    res.render('add_root_type', { title: 'Express' });
});

module.exports = router;