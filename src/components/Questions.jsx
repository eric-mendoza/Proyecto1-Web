import React, { Component } from 'react';
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right as ARROW } from 'react-icons-kit/md/ic_keyboard_arrow_right';


class Questions extends Component {
    render () {
        return (
            <div className="container-questions">
                <div className="content">
                    <h1 className="title">Preguntas Frecuentes</h1>
                    <ul className="faq-list">
                        <li>Preguntas frecuentes</li>
                        <li>Centro de ayuda</li>
                    </ul>
                    <a className="main-offer-btn">
                        PROBAR AHORA
                        <Icon icon={ARROW} size={30}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Questions;
