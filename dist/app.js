"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
    return res.json({ message: 'wellcome' });
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    return "Server running on port port " + port + " \uD83D\uDD25";
});
//# sourceMappingURL=app.js.map