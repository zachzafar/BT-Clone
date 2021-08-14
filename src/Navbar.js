import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Navbar({ Menu, menuOpt }) {
  const navbarList = [
    "Sports News",
    "Buisness",
    "Politics",
    "Regional",
    "World",
    "Subscribe",
  ];

  return (
    <div>
      {!menuOpt ? (
        <div  className="Navbar">
          <div className="navbar-main">
            <div className="navbar-element">
              <Link
                to={"/"}
                className="navbar-element"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img src="/BTLogo.jpg" width="200" height="50" />
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/sports"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                SPORTS
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/business"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                BUSINESS
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/politics"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                POLITICS
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/regional"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                REGIONAL
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/local-news"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                LOCAL
              </Link>
            </div>
            <div className="navbar-element">
              <Link
                to="/category/Subscribe"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
          <div>
            <MenuIcon className="MenuIcon" fontSize="large" onClick={Menu} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
