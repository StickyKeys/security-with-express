var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let response = "<h3>Home Page</h3>";
  response += `<small>${req.requestTime}</small>`;
  res.send(response);
});

module.exports = router;
