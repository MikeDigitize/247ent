import React from "react";

export const NavBar = props => <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Deals</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">About</a>
        </li>
    </ul>
</nav>;