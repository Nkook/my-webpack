import { helloworld } from "./helloworld";

document.write(helloworld())

// 通过 ./node_modules/.bin/webpack 运行打包，
// 此时文件夹中会多一个dist文件下有一个bundles.js文件。
// 为了看效果，手动创建一个html文件，手动把脚本引入进来，浏览器打开就可以看到了。