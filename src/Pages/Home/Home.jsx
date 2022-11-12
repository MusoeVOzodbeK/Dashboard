import React, { useState } from "react";
import "./home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
