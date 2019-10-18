import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo6.png";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/*
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Smoke Cartel
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            Carrito
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}


const Nav = styled.nav`
  background-image: url("./waterMark.png") !important;
  .nav-link {
    color: var(--mainText) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

