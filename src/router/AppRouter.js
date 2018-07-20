import React from 'react';
import RouterUrl from "./RouterUrl"
import App from "../App";
import Home from "../components/Home";
import {BrowserRouter,HashRouter,Route,Switch,Router } from 'react-router-dom';
export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter >
                <App></App>
            </HashRouter>
        )
    }
}