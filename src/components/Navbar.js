import { Search } from './Search';

import React from "react";

const Navbar = ({searchChange}) => {
  
  return (
    <nav className="navBar">
   <Search  searchChange={searchChange}   />
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Reputation</a>
          </li>
          <li>
            <a href="#">New users</a>
          </li>
          <li>
            <a href="#">Voters</a>
          </li>
          <li>
            <a href="#">Editors</a>
          </li>
          <li>
            <a href="#">Moderators</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
