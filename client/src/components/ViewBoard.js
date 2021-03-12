// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import React, { Component } from "react";

import Footer from './Footer';
import Card from './Card';

class ViewBoard extends Component {
    render() {

        return (
            <div>
                {/* Card */}
                <Card />
                <Footer />
            </div>
        )
    }
}


export default ViewBoard;

