import React from "react";
import './Footer.css';

// Since we don't have props, we can directly return our JSX.
const Footer = () => (
  <div className="footer">
    <footer>&copy; DevReact {new Date().getFullYear()}</footer>
  </div>
);

export default Footer;
