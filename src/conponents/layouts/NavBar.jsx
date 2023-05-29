import React from 'react'
import {NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
    
  <div className="container-fluid">
    <a className="navbar-brand" href="#">KP Bank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/emp">Employee</NavLink>
        </li>
       
       
      </ul>
      <div className='p-1'><NavLink className="btn btn-primary mx-2" type="submit" exact to="/register">Register</NavLink>
      <NavLink className="btn btn-primary" type="submit" exact to="/login">Login</NavLink></div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
