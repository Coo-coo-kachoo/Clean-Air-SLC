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

// import React from "react";
// import autoBind from 'react-autobind';
//
// import { connect } from "react-redux";
// import * as actionCreators from "../../actions/auth-actions.js";
//
// import UserQue from "../components/user-que.js";
//
// class UserQueContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       didReq: false
//     }
//     autoBind(this);
//   }
//   componentDidUpdate() {
//     if(this.props.userQue.length <=0 && this.props.priv === "admin" && !this.state.didReq) {
//       this.props.loadUserQue(this.props.token);
//       this.setState({
//         didReq: !this.state.didReq
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <UserQue handleDelete={this.props.deleteUser} handleAdd={this.props.addUser} users={this.props.userQue} priv={this.props.priv} token={this.props.token} />
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return state;
// }
//
// export default connect(mapStateToProps, actionCreators) (UserQueContainer);
