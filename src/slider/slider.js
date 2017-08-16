import React, { Component } from 'react';
import autoBind from "react-autobind";

import SlideOne from "./slide-one.js";
import SlideTwo from "./slide-two.js";
import SlideThree from "./slide-three.js";
import RightArrow from "./right-arrow.js";
import LeftArrow from "./left-arrow.js";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideCount: 1
        }
        autoBind(this);
    }
    nextSlide() {
        if(this.state.slideCount >= 3){
            this.setState({slideCount: 1})
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }
    previousSlide() {
        if(this.state.slideCount <= 1) {
            this.setState({ slideCount: 3 })
        } else {
            this.setState({ slideCount: this.state.slideCount - 1 });
        }
    }
    render() {
        return (
            <div className="slider">

                { this.state.slideCount === 1 ? <SlideOne /> : null }
                { this.state.slideCount === 2 ? <SlideTwo /> : null }
                { this.state.slideCount === 3 ? <SlideThree /> : null }

                <LeftArrow nextSlide={this.nextSlide}/>
                <RightArrow  previousSlide={this.previousSlide} />

            </div>
        );
    }
}

export default Slider;