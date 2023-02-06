const path = require('path');
const webpack = require('webpack')

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
  // 热更新在开发环境使用 
  mode: 'development',
  // loader配置
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader',
        ] // loader的调用是链式调用，执行顺序是从右到左的，所以会先执行css-loader去解析css，再将解析好的css传递给style-loader
      },
      {
        test : /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /.(png|jpg|gif|jpeg)$/,
      //   use: 'file-loader'
      // },
      // url-loader和file-loader功能一样，它可以设置较小资源(小图片/小字体)自动转base64。url-loader内部也还是用了file-loader的。
   		// 如何进行小资源base64的转换：url-loader接收一个参数，这个参数是通过options给loader进行一个传参，传的参数是limit:10240，limit的单位是字节。（如果图片大小小于10K的话，webpack打包的时候会自动做一个base64的转换）
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}