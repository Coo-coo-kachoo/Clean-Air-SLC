import React, { Component } from 'react';

class SlideTwo extends Component {
    render() {
        return (
            <div className="slide">
                <div className="slide-header"></div>
                <div className="traffic-img" style={{backgroundImage: "url('./images/factory.jpg')"}}>
                    <div className="container info-background">
                        <h3 className="title">Industry</h3>
                        <div className="flex-parent">
                            <ul>
                                <li>The remainder of the pollution <span className="percentage">(11%)</span> we experience in Utah is formed in Point Sources. These include things like medical waste incinerators, large scale mines, and refineries.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideTwo;