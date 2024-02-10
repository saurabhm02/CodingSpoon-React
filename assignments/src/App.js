// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/NavBar';
import FormAction from './components/FormAction';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    country: '',
    state: '',
    zipcode: '',
  });

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home userData={userData} />} />
          <Route path="/form" element={<FormAction onSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
