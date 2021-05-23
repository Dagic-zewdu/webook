const path = require('path');

module.exports = {
  entry: {
    index: ["./src/index.ts"],
    registerCompany:["./src/registerCompany.ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath:'/assets/',     
        port: 9000,
        open:true,
        liveReload: true,
        watchContentBase: true,
      },
   
  devtool: 'eval-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/assets'),
  },
};