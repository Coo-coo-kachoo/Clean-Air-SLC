import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class LeftArrow extends Component {
    render() {
        return (
        <button  onClick={() => {this.props.nextSlide()}} className="left-arrow arrows">
            <FontAwesome name="arrow-left" size= "3x" aria-hidden="true" />
        </button>
        );
    }
}

export default LeftArrow;