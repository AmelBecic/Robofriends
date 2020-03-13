import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <h3 className="naslov">ROBOFRIENDS</h3>
            <ul>
                <Link className="link" to="/home"> 
                    <li>Home page</li>
                </Link>
                <Link className="link" to="/about">
                    <li>About us</li>
                </Link>
                <Link className="link" to="/robots">
                <li>Robots</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
