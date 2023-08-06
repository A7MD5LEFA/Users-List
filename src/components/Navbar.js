import React from "react";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="nav-search">
        <i id="searchIcon" class="fa-solid fa-magnifying-glass"></i>
        <input className="searchInput" type="text" placeholder="Search users" />
      </div>
      <div className="nav-links"></div>
    </nav>
  );
};

export default Navbar;
