import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";


class Landing extends Component {
    
    render() {
        return (
            <div className="landing-imgs text-center" style={{backgroundImage: `url("${this.props.input.img}")`}}>
                <div className="landing-opacity">
                <form  onSubmit={(event) => {
                    event.preventDefault();
                    this.props.handleSubmit(this.props.input.zip)}} className="">
                    <h4 className="landing-title">Enter your zip code for the current air quality in your area</h4>
                    <input onChange={(event) => {this.props.handleChange("zip", event)}}
                        value={this.props.input.zip} className="zip-input form-container" placeholder="Zip code"/>
                    <button className="btn btn-success" type="submit">Submit</button>
                    <h5>{this.props.reportingArea}</h5>
                    <center className="quality-wrapper">
                        <div className="landing-air-quality" 
                        style={{backgroundColor: this.props.input.backgroundColor}}>{this.props.airQuality}</div>
                    </center>
                    
                </form>
                </div>
                <a href="#slider"><FontAwesome className="angle-down wow fadeInDownBig" name="angle-down" size="5x" data-wow-iteration="1" data-wow-duration="2s"/></a>
            </div>
        );
    }
}

export default Landing;