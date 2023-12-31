import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-toggler p-2">


      <div className="container-fluid">
        <ul className="navbar-nav mr-auto p-1">

          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>

<li className="nav-item">
  <Link to="/contact" className="nav-link" >Contact</Link>
</li>
</ul>
</div>


</nav>
);
};

export default NavBar;
