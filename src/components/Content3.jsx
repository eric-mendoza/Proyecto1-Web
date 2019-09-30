import React, { Component } from 'react';
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right as ARROW } from 'react-icons-kit/md/ic_keyboard_arrow_right';

class Content3 extends Component {
    render () {
        return (
            <div className="container">
                <div className="tab-content">
                    <h1 className="title">Disfruta donde quieras.</h1>
                    <h2 className="subtitle">Películas y programas ilimitados en tu teléfono, tablet, computadora y
                        TV sin costo extra.</h2>
                    <a className="main-offer-btn">
                        PROBAR AHORA
                        <Icon icon={ARROW} size={30}/>
                    </a>
                </div>
                <div className="content-video">
                    <div id="video3"/>
                </div>
            </div>
        );
    }
}

export default Content3;
