import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import SVG from 'react-inlinesvg';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right as ARROW } from 'react-icons-kit/md/ic_keyboard_arrow_right';

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
                <div className="header-content">
                    <h1 className="title">Programas y películas sin límite y mucho más.</h1>
                    <h2 className="subtitle">Disfruta donde quieras. Cancela en cualquier momento.</h2>
                    <a className="main-offer-btn">
                        PROBAR AHORA
                        <Icon icon={ARROW} size={30}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
