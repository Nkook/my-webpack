const path = require('path');

module.exports = {
 // 打包的入口文件
 entry: './src/index.js',
 // 打包输出的文件地址，输出到当前文件夹的dist目录，输出的文件名称叫bundles.js
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'bundles.js'
 },
 // 环境：线上环境
 mode: 'production'
}