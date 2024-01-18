import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Child from "./components/Child";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GrandChild from "./components/GrandChild";
import Login from "./components/Login";
import Welcome from "./components/Welcome";


export default function App() {
  const [showNav, setShowNav] = useState(false);
  const changeNav = () => {
    setShowNav(true);
  }
  return (
    <>
      <Router>
        {!showNav && <NavBar />}
        <Routes>
          <Route path="/" element={showNav ? <Welcome/> : <Home /> } />
          <Route path="/child" element={<Child />} />
          <Route path="/grandchild" element={<GrandChild />} />
          <Route path="/login" element={<Login navBar={changeNav}/>} />
        </Routes>
      </Router>
    </>
  );
}
