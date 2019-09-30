import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-top">
                        ¿Preguntas? Llama al +1 (408) 600-1719 (USA)
                    </div>
                    <ul className="footer-links">
                        <li>Preguntas frecuentes</li>
                        <li>Centro de ayuda</li>
                        <li>Cuenta</li>
                        <li>Prensa</li>
                        <li>Relaciones con inversionistas</li>
                        <li>Empleo</li>
                        <li>Formas de ver</li>
                        <li>Términos de uso</li>
                        <li>Privacidad</li>
                        <li>Preferencias de cookies</li>
                        <li>Información corporativa</li>
                        <li>Contáctanos</li>
                        <li>Prueba de velocidad</li>
                        <li>Avisos legales</li>
                        <li>Originales de Netflix</li>
                    </ul>
                    <div className="lang-switcher">
                        Español
                    </div>
                    <div className="footer-country">
                        Netflix Guatemala
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
