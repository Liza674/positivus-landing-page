import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Positivus</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#case-studies">Case Studies</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary">
          Request a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;

