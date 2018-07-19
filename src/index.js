require("./css/index.css")
require("./css/index.less")
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App'
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept();
  }

