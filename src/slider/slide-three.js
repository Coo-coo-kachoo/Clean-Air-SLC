import React, { Component } from 'react';

class SlideThree extends Component {
    render() {
        return (
            <div className="slide">
                <div className="slide-header"></div>
                <div className="traffic-img" style={{backgroundImage: "url('http://thraam.com/wp-content/uploads/2016/08/black-and-white-building-of-late-me9l4g2.jpg')"}}>
                    <div className="info-background">
                        <h3 className="title">Buildings</h3>
                        <ul>
                            <li>Places like your home, small businesses and small manufacturing companies account for about <span className="percentage">32%</span> of the total air pollution along the wasatch front.</li>
                            <li>Wood Burning in particular contributes an inordinate amount of pollution.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideThree;