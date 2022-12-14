const path = require('path');

module.exports = {
 // 单入口文件
 // // 打包的入口文件
 // entry: './src/index.js',
 // // 打包输出的文件地址，输出到当前文件夹的dist目录，输出的文件名称叫bundles.js
 // output: {
 //   path: path.join(__dirname, 'dist'),
 //   filename: 'bundles.js'
 // },

 // 多入口文件 npm run build后，dist文件夹下会生成index.js、search.js两个文件
 entry: {
   index: './src/index.js',
   search: './src/search.js'
 },
 output: {
   path: path.join(__dirname, 'dist'),
   filename: '[name].js'
 },
 // 环境：线上环境
 mode: 'production',
  // loader配置
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  }
}