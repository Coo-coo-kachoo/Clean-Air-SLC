import React, { Component } from 'react';
import ReactDOM from "react-dom";

//css files
import "./landing/landing.css";
import "./navbar/navbar.css";
import "./slider/slider.css";


import Navbar from "./navbar/nav.js";
import AuthComponent from "./authentication/auth.js";
import LandingContainer from "./landing/landing-container.js";
import Slider from "./slider/slider.js";
import ContactCongressContainer from "./contact/contact-congress-container.js";

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
                <AuthComponent />
                <Slider />
                <ContactCongressContainer />
            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
