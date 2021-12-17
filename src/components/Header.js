import React,{useState} from "react";
import logo from "../img/logo/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
    
  return (
    <header className="mb-4">
      <nav className="d-flex py-3 justify-content-between align-items-center">
        <div
          id="manu-wrapper"
          className="d-flex justify-content-between w-25 align-items-center"
        >
          <div id="logo">
            <img src={logo}></img>
          </div>
          <ul className="d-flex w-100 justify-content-between pt-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-cart">Add Car</Link>
            </li>
          </ul>
        </div>
        <form className="w-50 p-0 m-0">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value = {props.Input}
              onChange = {(e) => props.ChangeInput(e)}
            ></input>
          </div>
        </form>
        <ul className="d-flex pt-4 justify-content-between">
          <li>
            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span className = {
                  props.Cars == 0 ? 'd-none' : 'd-block count'
              }>{props.Cars}</span>
            </Link>
          </li>
          <li>
            <Link to="favourite">
              <i class="fas fa-heart"></i>
              <span className = {
                  props.Favs == 0 ? 'd-none' : 'd-block count'
              }>{props.Favs}</span>
            </Link>
          </li>
          <li>
            <Link to="/log-in">
              <i class="fas fa-sign-in-alt"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
