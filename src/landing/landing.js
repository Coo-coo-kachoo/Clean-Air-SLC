import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="landing-imgs text-center" style={{backgroundImage: `url("${this.props.input.img[0]}")`}}>
                <form className="opacity" onSubmit={(event) => {
                    event.preventDefault();
                    this.props.handleSubmit(this.props.input.zip)}} className="">
                    <h4 className="landing-title">Enter your zip code for the current air quality in your area</h4>
                    <input onChange={(event) => {this.props.handleChange("zip", event)}}
                        value={this.props.input.zip} className="zip-input form-container" placeholder="Zip code"/>
                    <button className="btn btn-success" type="submit">Submit</button>
                    <h3>{this.props.airQuality}</h3>
                </form>
                
            </div>
        );
    }
}

export default Landing;