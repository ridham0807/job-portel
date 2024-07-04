import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo"
            src="https://cdn5.vectorstock.com/i/1000x1000/74/44/job-portal-lettering-logo-design-template-concept-vector-37017444.jpg"
            alt=""
          /><br></br>
          {/* JOB-PORTEL */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Post-jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                View-jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Posted Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                CONTECT
              </Link>
            </li>
          </ul>
        </div>
        <div className="btnn">
          <button className="btn ">LOGIN</button>
          <button className="btn ">REGISTER</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;