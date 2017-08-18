import React, { Component } from 'react';

class SlideOne extends Component {

    render() {
        return (
            <div className="slide">
                <div className="slide-header"></div>
                <div className="slide-one">
                    <center style={{backgroundImage: "url('./images/traffic.jpg')"}} className="traffic-img">
                        <div className="info-background">
                            <h3 className="title">Traffic</h3> 
                                <div className="flex-parent">
                                    <ul>
                                        <li>Transportation emmisions accounts for around <span className="percentage">57%</span> of the total air pollution along the wasatch front.</li>
                                    </ul>
                                </div>
                        </div>
                    </center>
                </div>
            </div>
            
        );
    }
}

export default SlideOne;