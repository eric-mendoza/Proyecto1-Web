import React, { Component } from 'react';
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right as ARROW } from 'react-icons-kit/md/ic_keyboard_arrow_right';

class Content1 extends Component {
    render () {
        return (
            <div className="container">
                <div className="tab-content">
                    <h1 className="title">Disfruta en tu TV.</h1>
                    <h2 className="subtitle">Puedes ver en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
                        reproductores de Blu-ray y más.</h2>
                    <a className="main-offer-btn">
                        PROBAR AHORA
                        <Icon icon={ARROW} size={30}/>
                    </a>
                </div>
                <div className="content-video">
                    <div id="video1"/>
                </div>
            </div>
        );
    }
}

export default Content1;
