import React from 'react';
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/child">Child</Link>
            <Link to="/grandchild">GrandChild</Link>
        </div>
    </>
  )
}

export default NavBar