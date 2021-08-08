import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
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
          <Link to="/category/sports" style={{ textDecoration: "none", color: "white" }}>
            <h5>Sports</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/category/business" style={{ textDecoration: "none", color: "white" }}>
            <h5>Buisness</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/category/politics" style={{ textDecoration: "none", color: "white" }}>
            <h5>Politics</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/category/regional" style={{ textDecoration: "none", color: "white" }}>
            <h5>Regional</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/category/local-news" style={{ textDecoration: "none", color: "white" }}>
            <h5>Local</h5>
          </Link>
        </div>
        <div className="navbar-element">
          <Link to="/category/Subscribe" style={{ textDecoration: "none", color: "white" }}>
            <h5>Subscribe</h5>
          </Link>
        </div>
      </div>

      <div>
     
      <MenuIcon  className="MenuIcon" fontSize="large" onClick={Menu}/>
      </div>
    </div>
  );
}

export default Navbar;
