import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class RightArrow extends Component {
    render() {
        return (
        <button onClick={() => {this.props.previousSlide()}} className="right-arrow arrows">
            <FontAwesome name="arrow-right" size= "3x" aria-hidden="true" />
        </button>
        );
    }
}

export default RightArrow;