var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var entries = {
  'production': [
    './src/app.js',
  ],
  'development': [
    './src/app.js',
    'webpack-hot-middleware/client'
  ],
}

var config = {
  devtool: 'source-map',
  entry: entries[env],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'SERVER_URL': JSON.stringify(process.env.SERVER_URL),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      include: /src/,
      loaders: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader?browsers=last 3 versions',
        'sass-loader?outputStyle=expanded'
      ]
    }]
  }
};

module.exports = config;
