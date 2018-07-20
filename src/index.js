import './css/index.css';
import './css/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter,Route,Router,Switch } from 'react-router-dom';
import 'babel-polyfill';
import App from './App'
import Home from './components/Home';
import AppRouters from "./router/AppRouter"
ReactDOM.render(
    <AppRouters></AppRouters>,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept();
  }

