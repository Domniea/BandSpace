import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <Link className='navbar--link' to='/'>Home</Link>
            <Link className='navbar--link' to='/bands'>Bands</Link>
            <Link className='navbar--link' to='/bandsubmit'>Submit Band</Link>
        </nav>
    )
}
export default Navbar