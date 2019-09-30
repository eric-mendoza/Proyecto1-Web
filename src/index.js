import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
//import server from './server';

//server.render();

ReactDOM.hydrate(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
