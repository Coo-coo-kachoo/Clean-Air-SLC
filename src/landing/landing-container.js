import React, { Component } from 'react';
import autoBind from "react-autobind";

import Landing from "./landing.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";

class LandingContainer extends Component {
    constructor() {
        super();
        this.state = {
            img: ["https://static1.squarespace.com/static/51269edde4b08376dc00502f/t/591c631b6a49631e377d0c88/1495032739759/Deluxe+Salt+Lake+City+Sightseeing+Bus+Tour.jpg?format=1500w"],
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

