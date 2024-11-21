import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import "./style.css";

import Home from "./views/Home";
import List from "./views/List";
import Population from "./views/Population";
import GDP from "./views/GDP";

export default function App() {
  return (
    <Router>
      <nav className=" navbar-dark bg-dark">
        <ul className="nav nav-pills flex-column flex-sm-row ">
          <li className="nav-item text-sm-center flex-sm-fill">
            <NavLink className="nav-link text-white" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item text-sm-center flex-sm-fill">
            <NavLink className="nav-link text-white" to="/List">
              List
            </NavLink>
          </li>
          <li className="nav-item text-sm-center flex-sm-fill">
            <NavLink className="nav-link text-white" to="/Population">
              Population
            </NavLink>
          </li>
          <li className="nav-item text-sm-center flex-sm-fill">
            <NavLink className="nav-link text-white" to="/GDP">
              GDP
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home title="Home Page" />} />
        <Route path="/List" element={<List title="Country List Page" />} />
        <Route
          path="/Population"
          element={<Population title="Population Page" />}
        />
        <Route path="/GDP" element={<GDP title="GDP Page" />} />
      </Routes>
    </Router>
  );
}
