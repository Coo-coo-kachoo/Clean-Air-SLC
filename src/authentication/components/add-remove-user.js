import React from "react";
import autoBind from "react-autobind";

class AddRemoveUser extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    }
    autoBind(this);
  }
  handleChange(event) {
    this.setState({
      selected: event.target.value
    });
  }
  render() {
    return (
      <div className="users-wrapper">
        <p className="user-name">{this.props.user.username}</p>
        <select className="priv-drop-down "  value={this.state.selected} onChange={this.handleChange}>
          <option value="">Select Priviledge</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button className="btn btn-default btn-success" onClick={() => {this.props.handleAdd(this.props.user.username, this.state.selected, this.props.token);}}>Add User</button>
        <button className="btn btn-default btn-success" onClick={() => {this.props.handleDeleteQue(this.props.user.username, this.props.user._id, this.props.token)}}>Remove User</button>
      </div>
    )
  }
}

export default AddRemoveUser;
