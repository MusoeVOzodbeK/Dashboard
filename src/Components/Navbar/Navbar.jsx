import React, { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BsGlobe2} from 'react-icons/bs'
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nContainerLEft">
          <button>
            <i className="bx bx-menu"></i>
          </button>
        <ul>
          <li>
            <Link className="link" to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link className="link" to="/settings">
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="nContainerRight">
        <button className="lang">
          <BsGlobe2 className="nIcon"/> <p>English</p>
        </button>
        <button>
          <i className="bx bx-bell"></i>
        </button>
        <button>
          <i className="bx bx-list-ul"></i>
        </button>
        <button>
          <i className="bx bx-message"></i>
        </button>
        <button>
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
