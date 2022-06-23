// Import => React
import React from "react";

// Import => React-Roter-Dom
import { NavLink } from "react-router-dom";

// Import => Style Component
import "../Nav/Nav.scss";

function Nav() {
    return (
        <>
            <nav className="nav">
                <input className="nav__input" type="text" placeholder="Search" />
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to={"/javascript"} className="nav__link">JavaScript</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/classname"} className="nav__link">Togri Class berish</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/github"} className="nav__link">GitHub Commit</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;