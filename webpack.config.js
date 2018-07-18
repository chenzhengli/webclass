var webpack=require("webpack");
var uglifyjsWebpackPlugins=require("uglifyjs-webpack-plugin");//压缩js的插件
var HtmlWebpackPlugin =require("html-webpack-plugin");//自动生成html模板，并且引入js
module.exports={
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name].[chunkhash:8].js',
        path:__dirname + '/out',
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/.less$/,
                use:["style-loader","css-loader","less-loader"]
            }


        ]
    },
    plugins:[
        new uglifyjsWebpackPlugins(),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
        })
    ],
    mode:'development'
}