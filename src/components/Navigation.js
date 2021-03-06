import React from "react";
import logo from "../assets/rick-and-morty-logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <nav className="bp3-navbar bp3-dark navbar">
      <div className="navbar-content rick-and-morty-navbar">
        <div className="bp3-navbar-group bp3-align-left">
          <img src={logo} alt="Rick and Morty's logo" height="85%" />
        </div>

        <div
          className="bp3-navbar-group bp3-align-left"
          style={{ marginLeft: "20px" }}
        >
          {props.search && (
            <input
              className="bp3-input navbar-input"
              placeholder="Search"
              type="text"
              onChange={props.onChange}
            />
          )}
        </div>

        <div className="bp3-navbar-group bp3-align-right">
          <NavLink
            to="/"
            className="navbar-link"
            activeClassName="navbar-link-active"
          >
            <button className="bp3-button bp3-minimal bp3-icon-home">
              Home
            </button>
          </NavLink>
          <NavLink
            to="/characters"
            className="navbar-link"
            activeClassName="navbar-link-active"
          >
            <button className="bp3-button bp3-minimal bp3-icon-user">
              Characters
            </button>
          </NavLink>
          <NavLink
            to="/advanced-search"
            className="navbar-link"
            activeClassName="navbar-link-active"
          >
            <button className="bp3-button bp3-minimal bp3-icon-search">
              Advanced Search
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
