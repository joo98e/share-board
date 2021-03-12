// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import React, { Component } from "react";
import '../css/Home.css';
import '../css/main.css'

import Login from './Login';
// import Profile from './Profile';

class Home extends Component {
    render() {

        return (
            <div>
                {/* login */}
                <Login />

                {/* logged */}
                {/* <Profile /> */}

            </div>
        )
    }
}


export default Home;

