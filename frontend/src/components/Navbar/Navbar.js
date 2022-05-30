import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const renderMenu = () => {
    return (
      <>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/contact-us">CONTACT</Link>
        </li>
        {/* <li>
          <Link to="/blog">BLOG</Link>
        </li> */}
      </>
    );
  };
  return (
    <div className="navbar">
      <div className="fluid-container flex ai-center jc-between">
        <h1 className="brand"><Link to="/"className="decor-off">Train Lead Consult </Link></h1>
        <nav className="nav">
          <ul className="main_menu">{renderMenu()}</ul>
          <div className="menu_smallScreen">
            <GiHamburgerMenu
              color="fff"
              fontSize={27}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="menu_overlay flex flex-column">
                <IoCloseSharp
                  className="overlay_close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="flex-column text-center">
                  {renderMenu()}
                </ul>
              </div>
            )}
          </div> 
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
