import React from "react";
import autoBind from "react-autobind";

class CurrentUserPrivRemove extends React.Component {
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
      <div>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.priv}</p>
        <select value={this.state.selected} onChange={this.handleChange}>
          <option value="">Select Priviledge</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={() => {this.props.handleStatus(this.props.user.username, this.state.selected, this.props.token);}}>Change Status</button>
        <button onClick={() => {this.props.handleDelete(this.props.user.username, this.props.user._id, this.props.token)}}>Remove User</button>
      </div>
    )
  }
}

export default CurrentUserPrivRemove;
