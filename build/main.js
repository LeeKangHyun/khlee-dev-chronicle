'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSE HTML BODY // 요청에서 JSON을 파싱할때 사용되는 미들웨어

var path = require('path'); // HTTP REQUEST LOGGER // HTTP 요청을 로그하는 미들웨어

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
  console.log('Develop 모드 사용');
  var config = require('../webpack.dev.config');
  var compiler = (0, _webpack2.default)(config);
  var bundleStart = null;

  compiler.plugin('compile', function () {
    console.log('번들중...');
    bundleStart = Date.now();
  });
  compiler.plugin('done', function () {
    console.log('번들 걸린 시간 ' + (Date.now() - bundleStart) + 'ms!');
  });

  var devServer = new _webpackDevServer2.default(compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.use('/', _express2.default.static(__dirname + '/../public'));
// 기타모듈 설치
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});