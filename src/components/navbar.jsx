import React from "react";
import { Link } from "react-router-dom";
import logo from "../grandmas.jpg";

function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          style={{
            width: 500,
            height: 200,
          }}
        />
      </Link>
    </div>
  );
}

export default Navbar;
