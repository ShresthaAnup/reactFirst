import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>Contents of Navbar</div>
            <div>Sidebar
                <div>Hamburger Icon</div>
                <div>
                    <ul>
                        <li><NavLink to ='/'>Home</NavLink></li>
                        <li><NavLink to ='/Filter'>Filter</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;