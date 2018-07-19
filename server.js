var express = require('express');
var app = express();
app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static('dist'));
if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    var webpackCompiled = webpack(webpackConfig);
    // 配置运行时打包
    // publicPath：这个插件的唯一必填项。由于index.html请求的out.js存放的位置映射到服务器的URI路径是根，即“/”，所以我赋予了publicPath为：“/”。
    // stats：我设置了console统计日志带颜色输出。
    // lazy：指示是否懒人加载模式。true表示不监控源码修改状态，收到请求才执行webpack的build。false表示监控源码状态，
    //配套使用的watchOptions可以设置与之相关的参数。
    var webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled, {
      publicPath: "/",
      stats: {colors: true},
      lazy: false,
      watchOptions: {
          aggregateTimeout: 300,
          poll: true
      },
    }));

     // 配置热更新
  var webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(webpackCompiled));
  }
  
var server = app.listen(8000, function(err) {
  var port = server.address().port;
    if (err) {
        console.log(err);
    }
  console.log('Open http://localhost:%s', port);
});
