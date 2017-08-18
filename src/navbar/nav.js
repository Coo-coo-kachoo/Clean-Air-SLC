import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import autoBind from "react-autobind";

import { connect } from 'react-redux';
import * as actionCreators from "../actions/index.js";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
             isOpen: false
        }
        autoBind(this);
    }
    showSettings(event) {
        event.preventDefault();
        <div id="outer-container">
            <Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } />
            <main id= 'page-wrap'>
                <Menu isOpen={ true } />
            </main>
        </div>
    }
    toggleMenu() {
        // console.log("aclled");
        // console.log(this.state.isOpen)
        // if(!this.state.isOpen){
        //     document.querySelector('.bm-overlay').style.display = 'none';
        //     document.querySelector('.bm-menu-wrap').style.display = 'none';
        // } else {
        //     document.querySelector('.bm-overlay').style.display = 'inherit';
        //     document.querySelector('.bm-menu-wrap').style.display = 'inherit';
        // }
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Menu>
                <h1>Clean Air SLC</h1>
                <a id="home" className="menu-item" href="#">Home</a>
                <a id="contact" className="menu-item" href="https://www.epa.gov/home/forms/contact-epa#problem">Contact EPA</a>
                <a id="login/signup" className="menu-item" onClick={() => {this.props.toggleSignup(); this.toggleMenu();}}>Sign Up</a>
                <a id="login/signup" className="menu-item" onClick={() => {this.props.toggleLogin(); this.toggleMenu();}}>Admin Login</a>
                <a id="about" className="menu-item" href="#">About</a>
            </Menu>
        )
    }
}

export default connect((state) => state, actionCreators) (Navbar);
