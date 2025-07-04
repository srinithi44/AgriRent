import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Language from './pages/Language';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddMachine from './pages/AddMachine';
import Booking from './pages/Booking';
// In future: import Language, Login, Home etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/add-machine" element={<AddMachine />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/language" element={<Language />} />
        {/* Example future: <Route path="/language" element={<Language />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
