const { options } = require('less');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
   filename: '[name]_[chunkhash:8].js' // js的文件指纹设置：设置8位的文件长度
 },
  // 环境：线上环境
  // 热更新在开发环境使用 
  mode: 'production',
  // loader配置
  module: { 
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      // MiniCssExtractPlugin这个插件的loader是没办法和style-loader一起使用的。功能是互斥的，style-loader是把样式插到head中，这个loader是把样式提取成一个公共的样式。
      // 想把css独立提取出来，首先要把style-loader删掉，再使用这个插件的loader
      {
        test: /.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ] // loader的调用是链式调用，执行顺序是从右到左的，所以会先执行css-loader去解析css，再将解析好的css传递给style-loader
      },
      {
        test : /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]' // 图片的文件指纹
            }
          }
        ]
      },
      // url-loader和file-loader功能一样，它可以设置较小资源(小图片/小字体)自动转base64。url-loader内部也还是用了file-loader的。
   		// 如何进行小资源base64的转换：url-loader接收一个参数，这个参数是通过options给loader进行一个传参，传的参数是limit:10240，limit的单位是字节。（如果图片大小小于10K的话，webpack打包的时候会自动做一个base64的转换）
      // {
      //   test: /.(png|jpg|gif|jpeg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10240
      //       }
      //     }
      //   ]
      // },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  // 使用插件将css文件提取成独立的文件，给这个插件设置css的文件指纹 npm i mini-css-extract-plugin -D
  // 在配置里把插件加进去
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}