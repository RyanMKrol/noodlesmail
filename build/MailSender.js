"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var MailSender = /*#__PURE__*/function () {
  function MailSender(gmailCredentials) {
    (0, _classCallCheck2["default"])(this, MailSender);
    validateCredentials(gmailCredentials);
    this.transporter = _nodemailer["default"].createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: gmailCredentials
    });
  }

  (0, _createClass2["default"])(MailSender, [{
    key: "setFrom",
    value: function setFrom(from) {
      this.from = from;
    }
  }, {
    key: "setTo",
    value: function setTo(to) {
      this.to = to;
    }
  }, {
    key: "sendMail",
    value: function () {
      var _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(subject, body) {
        var info;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.transporter.sendMail({
                  from: this.from,
                  to: this.to,
                  subject: subject,
                  text: body
                });

              case 2:
                info = _context.sent;
                console.log('Message sent: %s', info.messageId);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendMail(_x, _x2) {
        return _sendMail.apply(this, arguments);
      }

      return sendMail;
    }()
  }]);
  return MailSender;
}();

function validateCredentials(credentials) {
  if (!credentials.user) {
    throw new Error('Could not find `user` in credentials');
  }

  if (!credentials.pass) {
    throw new Error('Could not find `pass` in credentials');
  }
}

var _default = MailSender;
exports["default"] = _default;