import React from "react";
import { useLocation } from "react-router-dom";
import emdrtr from './emdr-logo.svg'

const Appbar = (props) => {
  const location = useLocation();
  // console.log(location.pathname.includes('admin'));

  const { cinemaMod } = props;
  const isAdmin = location.pathname.includes("admin");
  return (
    <div style={{maxHeight: "80px"}} className="appbar-for-admin">
      <nav
        className={`container navbar navbar-expand-lg navbar-light appbar-bg ${
          cinemaMod && !isAdmin ? "color-navbar-opacity" : "color-navbar"
        }`}
        style={{ minHeight: "80px" }}
      >
        <a className="navbar-brand" href="/">
          <img src={emdrtr} style={{minWidth: "100px", maxHeight: "60px"}} alt="EmdrTR"/>
        </a>
      </nav>
    </div>
  );
};

export default Appbar;
