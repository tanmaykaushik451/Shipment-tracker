import React from "react";
import {Link} from "react-router-dom"
import logo from "../assets/logo.svg"
import profile from "../assets/profile.svg"

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link to="/" className="navbar-brand d-flex align-items-center ml-5" href="#">
         <img src={logo} alt="logo" className="logo"/>
          <p className="mb-0 logotext">Intugine</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="mynavbar"
          aria-controls="mynavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item active">
              <Link to="/" className="nav-link font-weight-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Brands" className="nav-link font-weight-bold">
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Transporters" className="nav-link font-weight-bold">
                Transporters
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link font-weight-bold">
                <img className="profile mr-2" src={profile} alt="profile"/>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
