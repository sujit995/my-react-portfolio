import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="NavBar">
        <nav className="nav">
            <div className="profile">
                <img src={avatar} alt="" />
                <h2 className="prof-title">Sujit Mishra</h2>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </Link>
                </div>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" exact activeClassName="active">
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" exact activeClassName="active">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 All Copyrights Reserved</p>
            </footer>
        </nav>
    </div>
    )
}

export default Navbar;
