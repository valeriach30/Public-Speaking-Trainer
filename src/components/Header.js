import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className="container">
                <span className="logo">Speech <b>Crafters</b></span>
                <ul className="links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/main" style={{ color: 'white' }}>Practice</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
