import React from "react";
import { Link } from "react-router-dom";
import "./layout/Navbar.css";
import logo from "./img/logo-removebg.png";

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="nav-bar-container-light">
        <nav>
          <ul className="middle-items">
            <li className="list-item">
              <Link className="link-light" to="/">
                <img src={logo} alt="FinancialControl" className="website-logo" />
              </Link>
            </li>
            <li className="list-item">
              <Link className="link-light" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="link-light" to="/income">
                Income
              </Link>
            </li>
            <li className="list-item">
              <Link className="link-light" to="/expense">
                Expense
              </Link>
            </li>
            <li className="list-item">
              <Link className="link-light" to="/account">
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
