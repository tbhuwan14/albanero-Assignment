import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <nav className="navbar-toggler">
      <Link to="/customInputRow">
        <li>CustomInputRow</li>
      </Link>
      <Link to="/chart">
        <li>Chart</li>
      </Link>
    </nav>
  );
}
