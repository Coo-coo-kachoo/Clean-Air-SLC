import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/auth-actions.js";

import Users from "../components/users.js";

class UsersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      didReq: false
    }
    autoBind(this);
  }
componentDidUpdate() {
  if(!this.state.didReq){
    this.props.loadUsers(this.props.username, this.props.priv, this.props.token);
    this.setState({
      didReq: !this.state.didReq
    });
  }

}
  render() {
    console.log(this.props);
    return (
      <div className="users-container-wrapper">
        <Users handleStatus={this.props.changeStatus} currentUsers={this.props.currentUsers} handleDelete={this.props.deleteUser} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (UsersContainer);
