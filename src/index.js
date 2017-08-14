import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./landing/landing.css";

import Navbar from "./navbar/nav.js";
import LandingContainer from "./landing/landing-container.js";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LandingContainer />
            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));