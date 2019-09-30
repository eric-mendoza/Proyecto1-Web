import React, { Component } from 'react';
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right as ARROW } from 'react-icons-kit/md/ic_keyboard_arrow_right';

class Content2 extends Component {
    render () {
        return (
            <div className="container">
                <div className="content-video">
                    <div id="video2"/>
                </div>
                <div className="tab-content">
                    <h1 className="title">Descarga contenidos para ver donde vayas.</h1>
                    <h2 className="subtitle">Disfruta offline tus películas y programas favoritos.</h2>
                    <a className="main-offer-btn">
                        PROBAR AHORA
                        <Icon icon={ARROW} size={30}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Content2;
