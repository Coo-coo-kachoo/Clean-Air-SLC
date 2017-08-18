import React, { Component } from 'react';

class ContactCongress extends Component {
    render() {
        return (
            <div >
                <div id="title">
                    <h1>Who's Making the Decisions?</h1>
                </div>
                <input className="contact-input"  
                        type="text" 
                        placeholder="What state do you live in? (ex. UT)"
                        value={this.props.input.location}
                        onChange={(event)=>{
                            this.props.handleChange("location", event);
                      }} />
                <div className="contact-output">       
                    <div id="congress-output"></div>
                </div>  
                <button className="btn btn-success" onClick={()=> {
                    this.props.handleClick(this.props.input);
                }} >Submit</button> 
            </div>
        );
    }
}

export default ContactCongress;