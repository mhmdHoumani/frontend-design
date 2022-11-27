import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import sidebarData from "./SideBarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="header-navbar">
        <div className="header-logo">
          <div className="S_logo" />
          <div className="T_logo" />
        </div>
        <h1 className="header-title" style={{ fontSize: width < 500 ? 22 : 0 }}>
          Salameh Tech
        </h1>
        {width < 500 && (
          <div
            className="header-menu--bars"
            style={{ opacity: sidebar ? "0" : "1" }}
          >
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        )}
      </div>
      <nav
        className={
          width < 500
            ? !sidebar
              ? "header-nav--menu--sidebar"
              : "header-nav--menu--sidebar active"
            : "header-nav--menu"
        }
      >
        <ul
          className={
            width < 500 ? "nav-menu--items--sidebar" : "nav-menu--items"
          }
        >
          {width < 500 && (
            <li className="navbar-toggle" onClick={showSidebar}>
              <div className="header-menu--bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
          )}
          {sidebarData.map((item, index) => (
            <li key={index} className="nav-menu--item" onClick={showSidebar}>
              <Link to={item.path} className="nav-menu--link">
                {item.icon}
                <span className="nav-menu--title">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
