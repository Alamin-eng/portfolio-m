import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaHamburger, FaAd, FaBars } from "react-icons/fa";
import "./Nav.css";
import { RadialGradient } from "react-text-gradients";

function NavBar() {
  const [show, setShow] = useState(true);
  const [barDiv, setBarDiv] = useState("nav-desktop")

  function setNav() {
    setShow(!show)
  }


  return (
    <div>
      <FaBars className="fa-bars" onClick={setNav} />

      <ul className={`${show ? "nav-desktop" : "nav-responsive"}`}>
        <li>
          <Link
            className="nav-link"
            style={{
              textDecoration: "none",
              color: "red",
              justifyContent: "center",
            }}
            to="/"
          >
            <RadialGradient gradient={["white", "purple"]}>HOME</RadialGradient>
          </Link>
        </li>
        <li>
          <Link className="nav-link" style={{ textDecoration: "none" }} to="">
            <RadialGradient gradient={["white", "purple"]}>
              ABOUT
            </RadialGradient>
          </Link>
        </li>
        <li>
          <Link className="nav-link" style={{ textDecoration: "none" }} to="">
            <RadialGradient gradient={["white", "purple"]}>
              PROJECTS
            </RadialGradient>
          </Link>
        </li>
        <li>
          <Link className="nav-link" style={{ textDecoration: "none" }} to="">
            <RadialGradient gradient={["white", "purple"]}>
              CONTACTS
            </RadialGradient>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
