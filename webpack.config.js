const webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './app/entry.js',                     // 入口
  output: {                                    // 输出
    //path: './app/dist',
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devServer: {                                 // webpack-dev-server
    inline: true,
    contentBase: './app',
    port: 8101,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {                                        // 配置babel加载
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {                                       // 配置css加载，用sass的话，就配置sass的加载器就好
        test: /\.css$/, 
        loader: 'style-loader!css-loader?modules',
      },
      {                                       // 配置字体文件加载
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
    ],
  }
};
