import React from 'react';
import Navigation from '../components/Navigation';
import logo from '../assets/img/PygmentsLoogo.svg'

const Home = () => {

    return (
        <div className="home">
            <Navigation />
            <img src={logo} className="center-svg" alt="svg" />
        </div>
    );
};

export default Home;