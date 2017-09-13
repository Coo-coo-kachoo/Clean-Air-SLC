import React, { Component } from 'react';
import autoBind from "react-autobind";
import WOW from "wowjs";

import Landing from "./landing.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";


class LandingContainer extends Component {
    constructor() {
        super();
        this.state = {
            img: "images/good.jpg",
            zip: "",
            backgroundColor: "black",
        }
        autoBind(this);
    }
   
    componentDidUpdate() {
        if(this.props.airQuality === "Good" && this.state.backgroundColor !== "green") {
            this.setState({
                img: "images/good.jpg",
                backgroundColor: "green",
                zip: ""
            })
        } else if (this.props.airQuality === "Moderate" && this.state.backgroundColor !== "#FFD700") {
            this.setState({
                img: "images/moderate.jpg",
                backgroundColor: "#FFD700",
                zip: ""
            })
        } else if (this.props.airQuality === "Unhealthy for Sensitive Groups" && this.state.backgroundColor !== "orange") {
            this.setState({
                img: "images/unhealthy-for-sensitive-groups.jpg",
                backgroundColor: "orange",
                zip: ""
            })
        }else if (this.props.airQuality === "Unhealthy" && this.state.backgroundColor !== "red") {
            this.setState({
                img: "images/unhealthy",
                backgroundColor: "red",
                zip: ""
            })
        } else if (this.props.airQuality === "Very Unhealthy" && this.state.backgroundColor !== "purple") {
            this.setState({
                img: "images/very-unhealthy",
                backgroundColor: "purple",
                zip: ""
            })
        } else if (this.props.airQuality === "Hazardous" && this.state.backgroundColor !== "maroon") {
            this.setState({
                img: "images/hazardous",
                backgroundColor: "maroon",
                zip: ""
            })
        }
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    handleSubmit(zip) {
        this.props.loadQuality(zip);
    }
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <Landing 
                    handleSubmit={this.handleSubmit}
                    input={this.state} 
                    handleChange={this.handleChange} 
                    airQuality={this.props.airQuality}
                    reportingArea={this.props.reportingArea}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(LandingContainer);

