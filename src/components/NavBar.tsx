import * as React from "react";
import { useState } from "react";
import "../styles/navbar.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="portfolio-nav-container">
      <button
        className="open-button"
        onClick={() => setIsOpen(true)}
        aria-label="open sidebar"
        aria-expanded={isOpen}
        aria-controls="portfolio-navbar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#c9c9c9"
        >
          <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z" />
        </svg>
      </button>
      <nav
        id="portfolio-navbar"
        className={`portfolio-navbar ${isOpen ? "show" : ""}`}
      >
        <ul className="portfolio-navbar-container">
          <li>
            <button
              className="close-button"
              onClick={handleSideBarClose}
              aria-label="close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#c9c9c9"
              >
                <path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z" />
              </svg>
            </button>
          </li>
          <li>
            <a href="#" className="portfolio-nav-name">B</a>
          </li>
          <li>
            <a href="#about" onClick={handleSideBarClose}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleSideBarClose}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleSideBarClose}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleSideBarClose}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="over-lay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default Header;
