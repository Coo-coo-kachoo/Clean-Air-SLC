import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Modal from "react-modal";

import LoginContainer from "./containers/login-container.js";
import SignupContainer from "./containers/signup-container.js";
import UserQueContainer from "./containers/userque-container.js";
import UsersContainer from "./containers/users-container.js";

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    // backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    backgroundColor   : '#007EF5',
    opacity           : .8
  },
  content : {
    // position                   : 'absolute',
    top                        : '30%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    transform                  : "translate(-50%, -50%)"
  }
};


class AuthComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowingLogin: false,
      isShowingSignup: false
    }
    autoBind(this);
  }
  toggleModal(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }
  render() {
    return (
      <div id="login-signup" className="auth-component">
        <button onClick = {() => {this.toggleModal("isShowingSignup")}}>Signup for More Information</button>
        <Modal style={customStyles} isOpen={this.state.isShowingSignup} onRequestClose={() => {this.toggleModal("isShowingSignup");}} contentLabel="Signup">
          <SignupContainer toggleModal={this.toggleModal} />
        </Modal>

        <button onClick={() => {this.toggleModal("isShowingLogin")}}>Admin Login</button>
        <Modal style={customStyles} isOpen={this.state.isShowingLogin} onRequestClose={() => {this.toggleModal("isShowingLogin");}} contentLabel="Login">
          <LoginContainer toggleModal={this.toggleModal} />
        </Modal>

        <UserQueContainer />
        <UsersContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (AuthComponent);
