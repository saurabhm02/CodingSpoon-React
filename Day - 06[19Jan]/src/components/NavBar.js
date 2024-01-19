import React from 'react';
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
        <nav className="navbar">
          <div class="navbar-start">
            <div className="navbar-item">
                <Link to="/">Home</Link>
            </div>

          </div>
          
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/login" class="button is-light">
                  Log in
                </Link>
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar