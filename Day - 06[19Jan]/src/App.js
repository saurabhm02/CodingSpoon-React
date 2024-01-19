import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Welcome from "./components/Welcome";


export default function App() {

  const [showNav, setShowNav] = useState(false);
  const changeNav = () => {
    setShowNav(true);
  }

  const changeOnLofOut = () =>{
    setShowNav(false);
  }
  return (
    <>
      <Router>
        {!showNav && <NavBar navBar={changeNav}/>}
        <Routes>
          <Route path="/" element={showNav ? <Welcome/> : <Home /> } />
          <Route path="/login" element={<Login navBar={changeNav}/>} />
        </Routes>
      </Router>
    </>
  );
}
