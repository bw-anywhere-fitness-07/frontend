import React from 'react';
import { NavLink } from "react-router-dom";
import logoWhite from '../images/logo-white.png';
import "../styles/HomePage.css"

const HomePage = () => {
    return (
        <div className="header">
            <div className="logo-box">
                <img src={logoWhite} alt="logo" className="logo"/>
            </div>
            <div className='text-box'>
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Anywhere</span>
                    <span className="heading-primary-sub">Fitness</span>
                </h1>
                <NavLink exact to="/login" className="btn btn-white btn-animated">Login</NavLink>
            </div>
        </div>
    )
};

export default HomePage;