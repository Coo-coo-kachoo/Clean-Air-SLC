import React, { Component } from 'react';

class ContactCongress extends Component {
    render() {
        return (
            <div>
                <input  type="text" 
                        placeholder="state (ex. WI, UT)"
                        value={this.props.input.location}
                        onChange={(event)=>{
                            this.props.handleChange("location", event);
                        }} />
                <div id="congress-output"></div> 
                <button onClick={()=> {
                    this.props.handleClick(this.props.input);
                }} >Submit</button> 
            </div>
        );
    }
}

export default ContactCongress;