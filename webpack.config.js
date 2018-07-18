var webpack=require("webpack");
var uglifyjsWebpackPlugins=require("uglifyjs-webpack-plugin");//压缩js的插件
module.exports={
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
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
    ],
    mode:'development'
}