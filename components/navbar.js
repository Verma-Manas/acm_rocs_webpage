import React from 'react';
import './styles.css'; // Optional: Include a CSS file for styles

const NavBar = () => {
    // Function to handle scrolling to sections
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="layout">
                <div className="main">
                    <button className="nav-button" onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button className="nav-button" onClick={() => scrollToSection('location-embed')}>
                        LOCATION
                    </button>
                    <button className="nav-button" onClick={() => scrollToSection('register')}>
                        REGISTER
                    </button>
                    <button className="nav-button" onClick={() => scrollToSection('speakers')}>
                        SPEAKERS
                    </button>
                    <button className="nav-button" onClick={() => scrollToSection('organiser')}>
                        ORGANISERS
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
