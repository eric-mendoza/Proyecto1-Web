import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Content1 from '../components/Content1.jsx';
import Content2 from '../components/Content2.jsx';
import Content3 from '../components/Content3.jsx';
import Questions from '../components/Questions.jsx';
import Footer from '../components/Footer.jsx';


class Main extends Component {
    render () {
        return (
            <div className="main">
                <Header/>
                <Content1 />
                <Content2 />
                <Content3 />
                <Questions />
                <Footer />
            </div>
        );
    }
}

export default Main;
