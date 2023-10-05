import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <span className="logo">Speech <b>Crafters</b></span>
                <ul className="links">
                    <li>Home</li>
                    <li>Practice</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
