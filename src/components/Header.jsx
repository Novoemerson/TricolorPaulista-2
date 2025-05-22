import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/spfc/logo.png";
import "../styles/theme.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="SPFC Logo" className="header-logo" />
      <nav className="navbar">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/news">Notícias</NavLink>
        <NavLink to="/matches">Jogos</NavLink>
        <NavLink to="/players">Elenco</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
    </header>
  );
}
