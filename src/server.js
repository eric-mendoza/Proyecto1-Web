import React from 'react';
import App from './App.jsx';
import { renderToString } from 'react-dom/server';

module.exports = function render () {
    let html = renderToString(
        <App />
    );

    return renderFullPage(html);
};

function renderFullPage (html) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Netflix2</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript" src="main.js"></script>
      </body>
    </html>
    `;
}
