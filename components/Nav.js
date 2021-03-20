import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div >
            <NavLink to="/" > PORTFOLIO </NavLink >
            <NavLink to="/contact">Contact Me</NavLink >
            <NavLink to="/offer" >What I Offer</NavLink >
            <NavLink to="/resume" >My Resume</NavLink >
            {/* <Route component={Error} /> */}
        </div>
    )
}
export default Nav;
