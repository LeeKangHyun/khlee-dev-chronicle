const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const publicPath = __dirname + '/public';

module.exports = {
  // 가장 처음 읽을 스크립트파일
  // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
  entry: {
    bundle: ['./src/index.js']
  },

  // 파일을 합치고 각각 [name] 에 저장한다.
  output: {
    path: publicPath,
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, // ES6 문법과 JSX 문법을 사용한다
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        },
        exclude: ['/node_modules']
      },
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader'}, {loader: 'sass-loader'}]
        })
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ // 로더들에게 옵션을 넣는다.
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({ // console 제거, 소스맵 보존 등
      // compress: true
      compress: {
        // warnings: false, // 콘솔 창에 출력되는 게 보기 귀찮다면 요 놈을 주석 제거를 하면 된다.
        unused: true // 요 놈이 핵심
      },
      mangle: false,    // DEMO ONLY: Don't change variable names.(난독화)
      beautify: true,   // DEMO ONLY: Preserve whitespace (가독성 좋게 함)
      output: {
        comments: true  // DEMO ONLY: Helpful comments (주석 삭제 안 함)
      }
    }),
    new webpack.DefinePlugin({  // JS 변수를 치환
      'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin 처럼 할 수도 있습니다.
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']), // 요즘은 위의 DefinePlugin 보다 이렇게 하는 추세입니다.
    extractSass
  ]
};

// DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
// parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
// 위와 같이 로더 개발자를 위한 로그가 뜨는데 보기 싫다면 주석을 제거하면 된다.
// process.noDeprecation = true;