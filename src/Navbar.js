import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>THE BLOGG</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blogg</a>
      </div>
    </nav>
  );
}

export default Navbar;
