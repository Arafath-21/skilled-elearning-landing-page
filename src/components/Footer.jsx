import React from 'react'
import logoligh from '../assets/logo-light.svg';
function Footer(props) {
  return <>
    <footer className="navbar navbar-expand-lg bg-body-tertiary menu">
    <div className="container-fluid nav-bar footer padding-sides">
        <a className="navbar-brand" href="#">
            <img src={logoligh} alt="logo" />
        </a>
        <ul className="navbar-nav">
            <li className="nav-item">
            <button className="btn btn-secondary1"><p>{props.data}</p></button>
            </li>
        </ul>  
    </div>
    </footer>    
  </>
}

export default Footer