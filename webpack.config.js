var webpack=require("webpack");
var uglifyjsWebpackPlugins=require("uglifyjs-webpack-plugin");//压缩js的插件
var HtmlWebpackPlugin =require("html-webpack-plugin");//自动生成html模板，并且引入js
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
module.exports={
    entry:{
        index: ['webpack-hot-middleware/client', './src/index.js'],
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname + '/dist'),
       // publicPath:'/dist/',//index.html与打包后的js的相对路径
    },
    devtool:"source-map",//使打包后的代码的报错信息精确到行
    module:{
        rules:[
            {
                test:/.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }


        ]
    },
    plugins:[
        new uglifyjsWebpackPlugins(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
        new webpack.HotModuleReplacementPlugin(),//是关于热更新的，
        new webpack.NoEmitOnErrorsPlugin()//可以保证出错时页面不阻塞，且会在编译结束后报错
    ],
    devServer: {             
        // contentBase:'./',//配置服务器目录
        // publicPath:'/js/',//同output的publicPath
        port: 8000,//配置端口
       // inline:true,//热加载
       // hot:true,//热替换
        historyApiFallback: true//启动URL后退功能
    },
    mode:'development'
}