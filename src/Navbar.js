import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Navbar({Menu,menuOpt }) {
  const navbarList = ["Sports News","Buisness","Politics","Regional","World","Subscribe"]

  /*
   {navbarList.map((item) => {
        <div className="navbar-element">
          <Link to={`/section/${item}/`} style={{ textDecoration: "none", color: "white" }}>
            <h5>{item}</h5>
          </Link>
        </div>
      })}
  
  */ 
  return (
    <div className="Navbar">
      <div className="navbar-main">
     
      <div className="navbar-element">
          <Link
            to={"/"}
            className="navbar-element"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>BARBADOS TODAY</h3>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/Sports-news" style={{ textDecoration: "none", color: "white" }}>
            <h5>Sports News</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/Buisness" style={{ textDecoration: "none", color: "white" }}>
            <h5>Buisness</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/Politics" style={{ textDecoration: "none", color: "white" }}>
            <h5>Politics</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/Regional" style={{ textDecoration: "none", color: "white" }}>
            <h5>Regional</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/World" style={{ textDecoration: "none", color: "white" }}>
            <h5>World</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/section/Subscribe" style={{ textDecoration: "none", color: "white" }}>
            <h5>Subscribe</h5>
          </Link>
        </div>
      </div>
      <div className="MenuIcon">
        <MenuIcon fontSize="large" onClick={Menu}/>
      </div>
    </div>
  );
}

export default Navbar;
