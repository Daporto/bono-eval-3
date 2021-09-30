const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const ErrorSerializer = require('./src/serializers/ErrorSerializer');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const myCustomMiddleware = (req, res, next) => {
  console.log('myCustomMiddleware', req.query);
  console.log("Hey, I'm in the middleware");
  next();
};

app.use('/', myCustomMiddleware, indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.status(404);
  res.json(new ErrorSerializer(404, 'Not found'));
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode);
  res.json(new ErrorSerializer(statusCode, message));
});

module.exports = app;
