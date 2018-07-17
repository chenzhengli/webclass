var webpack=require("webpack");
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:__dirname+'dist',
        publicPath:'http://localhost:8080/out'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:["babel-loader"]
            },
        ]
        
    }

}