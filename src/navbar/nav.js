import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class Navbar extends React.Component {
    showSettings(event) {
        event.preventDefault();
        <div id="outer-container">
            <Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } />
            <main id= 'page-wrap'>
                <Menu isOpen={ true } />
            </main>
        </div>
    }
    render() {
        return(
            <Menu>
                <h1>Clean Air SLC</h1>
                <a id="home" className="menu-item" href="#">Home</a>
                <a id="contact" className="menu-item" href="https://www.epa.gov/home/forms/contact-epa#problem">Contact EPA</a>
                <a id="about" className="menu-item" href="#">About</a>
                

            </Menu>

        )
    }
}

export default Navbar;