// IE
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './components/Home';
import ViewBoard from './components/ViewBoard';
import NavBar from './components/Navi';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <BrowserRouter>
    {/* <NavBar /> */}


    <div id="container">
      <div id="wrap">
        {/* navi */}
        <NavBar />

        {/* HOME */}
        <Route exact path="/" component={Home}></Route>

        {/* Login */}
        <Route exact path="/login">{/* <Login /> */}</Route>

        {/* Notice */}
        <Route exact path="/notice">{/* <Notice /> */}</Route>

        {/* ViewBoard */}
        <Route exact path="/ViewBoard" component={ViewBoard}></Route>
        
      </div>
    </div>

  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
