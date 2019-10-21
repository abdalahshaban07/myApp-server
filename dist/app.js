'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _invoice = require('./config/routers/invoice.router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb+srv://invoice-builder:12345@invoice-builder-zdirm.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }).then(function () {
  return console.log('💻 Mondodb Connected');
}).catch(function (err) {
  return console.error(err);
});

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.use('/api', _invoice.router);

app.use(function (req, res, next) {
  var error = new Error('Not Found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({ error: {
      message: error.message
    } });
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('server start on port ', port);
});
//# sourceMappingURL=app.js.map