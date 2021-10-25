import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  const Click = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ali
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> 01791729693</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> mdalihussain446@gamil.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburgar" onClick={Click}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
