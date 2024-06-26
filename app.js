var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let testsRouter = require('./routes/tests');
let birdsRouter = require('./routes/birds');
let foodRouter = require('./routes/food');

var app = express();

const myLogger = function(req, res, next) {
     console.log("LOGGED");
     next();
}

const requestTime = function(req, res, next) {
     req.requestTime = Date.now();
     next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(myLogger);
app.use(requestTime);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tests', testsRouter);
app.use('/birds', birdsRouter);
app.use('/food', foodRouter);

app.route('/chain')
   .get((req, res) => {
        res.send("<p>GET CHAIN</p>");
   })
   .post((req, res) => {
        res.send("<p>POST CHAIN</p>");
   })
   .put((req, res) => {
        res.send("<p>PUT CHAIN</p>");
   });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
