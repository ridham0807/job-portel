import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register"
import Home from "./Components/Home";
import Contect from "./Components/Contect";
import Post_jobs from "./Components/Post_jobs";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/post-jobs" element={<Post_jobs />} />
        <Route exact path="/contect" element={<Contect />} />
      </Routes>
    </Router>
  );
};

export default App;
