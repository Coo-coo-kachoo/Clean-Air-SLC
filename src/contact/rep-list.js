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
            <div>
                {this.genReps()}
            </div>
        );
    }
}

export default RepList;