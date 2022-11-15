import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../images/rick-and-morty-logo.png';
import '../styles/Navbar.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <div>
                    <Link to="/" className= "fs-3 ubuntu navbar-brand text-light">
                        <img className="logo" src={LOGO} alt="Max-height 10px"/>
                    </Link>
                </div>
                <button className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown"
                    ria-controls="navbarNavDropdown" 
                    aria-expanded="false"
                    ria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-link text-light">
                            Characters
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link text-light">
                            Episodes
                        </NavLink>
                        <NavLink to="/favorites" className="nav-link text-light">
                            Favorites
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;