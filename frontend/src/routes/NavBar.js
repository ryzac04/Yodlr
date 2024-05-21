import { NavLink } from "react-router-dom";

import "./NavBar.css";

/** NavBar Component
 * 
 * Navigation bar for site - shows up on every page. 
 */

const NavBar = () => {

    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
                <NavLink className="nav-link" to="/" >Yodlr</NavLink>
            </li>
            <li className="nav-item me-4">
                <NavLink className="nav-link" to="/signup" >Signup</NavLink>
            </li>
            <li className="nav-item me-4">
                <NavLink className="nav-link" to="/admin" >Admin Page</NavLink>
            </li>
        </ul>
    );
};

export default NavBar;