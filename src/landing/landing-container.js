import React, { Component } from 'react';
import autoBind from "react-autobind";

import Landing from "./landing.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";

class LandingContainer extends Component {
    constructor() {
        super();
        this.state = {
            img: ["images/good.jpg", "images/moderate.jpg", "images/unhealthy-for-sensitive-groups.jpg", "images/unhealthy.jpg", "images/very-unhealthy.jpg", "images/hazardous.jpg"],
            zip: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    handleSubmit(zip) {
        this.props.loadQuality(zip);
        this.setState({
            zip: ""
        })
    }
    
    render() {
        return (
            <div>
                <Landing handleSubmit={this.handleSubmit}
                    input={this.state} 
                    handleChange={this.handleChange} 
                    airQuality={this.props.airQuality}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(LandingContainer);

