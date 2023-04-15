import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/service'>Service</NavLink>
                <NavLink to='/bolog'>Bologs</NavLink>
                <NavLink to='/about'>About</NavLink>
                 
            </nav>
        </div>
    );
};

export default Navbar;