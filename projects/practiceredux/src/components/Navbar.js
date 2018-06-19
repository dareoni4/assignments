import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    console.log(window.location)
    return (
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Signup"> Sign up </Link>
            <Link to="/TicTac">Tic Tac</Link>
        </div>
    )
}

export default Navbar;