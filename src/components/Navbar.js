import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../images/rick-and-morty-logo.png';
import '../styles/Navbar.css';
import "bootstrap/js/src/collapse.js";

function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div>
                    <Link to="/" className= "fs-3 ubuntu navbar-brand text-light">
                        <img className="logo" src={LOGO} alt="Max-height 10px"/>
                    </Link>
                </div>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarsExample09">
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