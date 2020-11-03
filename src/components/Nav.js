import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div class="nav-container">
        <nav class="navbar">
            <h1 id="navbar-logo"><Link to = '/' class="links-logo">LOGO</Link></h1>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        
            <ul class="nav-menu">
                <li><Link to="/" class="nav-links">Home</Link></li>
                <li><Link to="#" class="nav-links">Services</Link></li>
                <li><Link to="/about" class="nav-links">About Us</Link></li>
                <li><Link to="/contact" class="nav-links">Contact Us</Link></li>
                <li><Link to="#" class="nav-links nav-links-btn">Sign Up</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Nav
