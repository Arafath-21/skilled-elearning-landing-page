import React from 'react';
import logoDark from '../assets/logo-dark.svg';

function Navbar(props) {
  return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary menu">
  <div className="container-fluid nav-bar padding-sides position-relative ">
    <a className="navbar-brand" href="#">
        <img src={logoDark} alt="logo" />
    </a>
    <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-primary z-2 position-relative"><p>{props.data}</p></button>
        </li>
    </ul>  
  </div>
</nav>  
  </>
}

export default Navbar;