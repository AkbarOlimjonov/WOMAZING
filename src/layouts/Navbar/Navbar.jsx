import React from "react";
import logo from "./logo.svg";
import phonePhoto from "./phone.svg";
import cartPhoto from "./cart.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <div className="logo">
            <Link className="link" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li>
              <Link className="link" to="/">Главная</Link>
            </li>
            <li>
              <Link className="link" to="/shop">Магазин</Link>
            </li>
            <li>
              <Link className="link" to="/about">О бренде</Link>
            </li>
            <li>
              <Link className="link" to="/support">Контакты</Link>
            </li>
          </ul>
          <div className="navbar-buttons">
            <a href="tel:+998900466681">
              <img src={phonePhoto} alt="Ss" />
              <span>+7 (495) 823-54-12</span>
            </a>
            <button>
              <Link to="/cart">
                <img src={cartPhoto} alt="ss" />
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
