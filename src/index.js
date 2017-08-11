import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import LandingContainer from "./landing/landing-container.js";

// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

// let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <LandingContainer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));