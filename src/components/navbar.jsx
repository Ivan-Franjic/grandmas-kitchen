import React from "react";
import { Link } from "react-router-dom";
import logo from "../grandmas.jpg";

function Navbar() {
  return (
    <div class="flex justify-center mb-10 border-b-2 border-yellow-900">
      <Link to="/">
        <img class="logo" src={logo} />
      </Link>
    </div>
  );
}

export default Navbar;
