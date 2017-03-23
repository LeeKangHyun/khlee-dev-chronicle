// import express from 'express';
// import WebpackDevServer from 'webpack-dev-server';
// import Webpack from 'webpack';
// import morgan from 'morgan'; // HTTP REQUEST LOGGER // HTTP 요청을 로그하는 미들웨어
// import bodyParser from 'body-parser'; // PARSE HTML BODY // 요청에서 JSON을 파싱할때 사용되는 미들웨어

var express = require('express');
var WebpackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const path = require('path');
const app = express();
const port = 3000;
const devPort = 3001;

if (process.env.NODE_ENV == 'development') {
  console.log('Develop 모드 사용');
  const config = require('../webpack.dev.config');
  let compiler = Webpack(config);
  var bundleStart = null;

  compiler.plugin('compile', function() {
    console.log('번들중...');
    bundleStart = Date.now();
  });
  compiler.plugin('done', function() {
    console.log('번들 걸린 시간 ' + (Date.now() - bundleStart) + 'ms!');
  });

  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}

app.use('/', express.static(__dirname + '/../public'));
// 기타모듈 설치
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});
