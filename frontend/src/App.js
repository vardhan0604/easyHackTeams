// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// // import About from './About';
// // import Contact from './Contact';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* Add more routes and components for other pages */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import CommunityList from "./components/CommunityList";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Router className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <div className="">
        <div className="">
          <Header />
          <CommunityList />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
