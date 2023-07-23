<<<<<<< HEAD
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import { Link } from 'react-router-dom';
import React from "react";
import "./App.css";
import Header from "./components/Header";
import CommunityList from "./components/CommunityList";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Navbar />
      </div>
      <div className="d-flex">
        <div className="left-pane col-lg-6">
          <div id="mySidebar" className="sidebar">
            <Link className="closebtn" onClick={() => {}}>
              &times;
            </Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Clients</Link>
            <Link href="#">Contact</Link>
          </div>

          <Header />
          <CommunityList />
        </div>
        <div className="col-lg-6"> {/* Adjust the size as needed */}
          <Dashboard />
        </div>
      </div>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
// import About from './About';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes and components for other pages */}
      </Routes>
    </Router>
>>>>>>> origin/frontend
  );
};

export default App;

