import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">useContext</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};
