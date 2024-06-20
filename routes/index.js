var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // let response = "<h3>Home Page</h3>";
  // response += `<small>${req.requestTime}</small>`;
  // res.send(response);
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
