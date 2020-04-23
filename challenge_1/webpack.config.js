var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/');
var DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
