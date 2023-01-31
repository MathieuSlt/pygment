import React from 'react';
import Navigation from '../components/Navigation';
import logo from '../assets/img/PygmentsLoogo.svg'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();


    return (
        <div className="home">
            <Navigation />

            <h1>
                {location.state && location.state.id ? <h1>Hello {location.state.id}</h1> : null}
            </h1>

            <img src={logo} className="center-svg" alt="svg" />
        </div>
    );
};

export default Home;