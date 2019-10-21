'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _invoice = require('../models/invoice.model');

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  findAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', res.json({ message: 'Find All' }));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function findAll(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return findAll;
  }(),
  create: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$body, item, qty, date, due, tax, rate, schema, _Joi$validate, error, value;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, item = _req$body.item, qty = _req$body.qty, date = _req$body.date, due = _req$body.due, tax = _req$body.tax, rate = _req$body.rate;
              schema = _joi2.default.object().keys({
                item: _joi2.default.string().required(),
                date: _joi2.default.date().required(),
                due: _joi2.default.date().required(),
                qty: _joi2.default.number().integer().required(),
                tax: _joi2.default.number().optional(),
                rate: _joi2.default.number().optional()
              });
              _Joi$validate = _joi2.default.validate(req.body, schema), error = _Joi$validate.error, value = _Joi$validate.value;

              if (!(error && error.details)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return', res.status(400).json(error.details));

            case 5:

              _invoice2.default.create(value).then(function (invoice) {
                return res.json({ message: invoice });
              }).catch(function (err) {
                return res.status(400).json({ message: err });
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function create(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return create;
  }()
};
//# sourceMappingURL=invoice.controller.js.map