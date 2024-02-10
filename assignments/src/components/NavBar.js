import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <div class=" bg-slate-500 text-white flex flex-row justify-between items-center h-12 px-10 text-xl mx-auto">

        <Link to="/">
              Coding Spoon Assignments(Saurabh)
          </Link>

        <nav className=" flex gap-x-6">
            <ul class="flex gap-8">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                 <Link to="/form">Form</Link>
                </li>
            </ul>
        </nav>

    </div>
    
  );
}

export default Navbar;
