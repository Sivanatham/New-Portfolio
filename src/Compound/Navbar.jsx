import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* LOGO */}
        <div className="logo">Sivanathan D</div>

        {/* DESKTOP MENU */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* MOBILE ICON */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
