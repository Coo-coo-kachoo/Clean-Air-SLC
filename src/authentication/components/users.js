import React from "react";
import CurrentUserPrivRemove from "./current-user-priv-remove.js";

class Users extends React.Component {
  genCurrentUsers() {
    console.log(this.props.currentUsers);
    return this.props.currentUsers.map((item, index) => {
      return (
        <CurrentUserPrivRemove handleDelete={this.props.handleDelete} token={this.props.token} key={item.username + index} user={item}/>
      )
    })
  }
  render() {
    return (
      <div className="users-wrapper">
        <h5>Current Users:</h5>
        {this.genCurrentUsers()}
      </div>
    )
  }
}

export default Users;
