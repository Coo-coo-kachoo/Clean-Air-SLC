import React, { Component } from 'react';

class RepList extends Component {
    genReps() {
        return this.props.rep.map((item, index)=> {
            return <div key={item.person.name + index} >
                {item.person.name}
            </div>
        })
    }
    render() {
        return (
            <div className="rep-background">
                {this.genReps()}
            </div>
        );
    }
}

export default RepList;