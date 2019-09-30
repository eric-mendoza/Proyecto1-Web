import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import SVG from 'react-inlinesvg';

class Header extends Component {
    render () {
        return (
            <div className="header-container">
                <div className="header-top">
                    <SVG className="logo" src={logo}/>
                    <a className="signIn-btn" href="https://www.netflix.com/login">
                        Iniciar sesión
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
