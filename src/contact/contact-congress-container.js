import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import ContactCongress from "./contact-congress.js";
import RepList from "./rep-list.js";

class ContactCongressContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            location: ""
        }
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    handleUpdateValue(location) {
        this.props.loadCongressRep(location);
        this.setState({
            location: ""
        })
    }
    render() {
        return(
            <div  className="main-contact-output" style={{backgroundImage:"url('./images/good.jpg')"}}>
                <ContactCongress 
                    input={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleUpdateValue}  />
                <div className="reps">
                    <RepList rep={this.props.rep} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchersToProps)(ContactCongressContainer);