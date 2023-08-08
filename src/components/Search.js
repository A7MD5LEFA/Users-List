import React from "react";
export function Search({ searchChange }) {
  return (
    <div className="nav-search">
      <i id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
      <input className="searchInput" type="search" placeholder="Search users" onChange={searchChange} />
    </div>
  );
}
