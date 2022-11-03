import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  console.log();
  return (
    <footer className="min-vh-100 py-2">
      <a
        href="https://github.com/RyanOfEastview"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="4x" className="footer-icon" />
      </a>
    </footer>
  );
}

export default Footer;
