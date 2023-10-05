import React from 'react';
import '../styles/landing.css';
import Header from './Header';
function Main() {
    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                <h1>Welcome to Public Speaking Trainer AI</h1>
            </div>
        </div>
    );
}

export default Main;
