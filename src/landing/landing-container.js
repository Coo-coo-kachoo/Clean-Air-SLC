import React, { Component } from 'react';
import autoBind from "react-autobind";

import Landing from "./landing.js";

class LandingContainer extends Component {
    constructor() {
        super();
        this.state = {
            picture: "",
            airQuality: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Landing input={this.state} handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default LandingContainer;