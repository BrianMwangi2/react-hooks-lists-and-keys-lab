import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{<li key={links}>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
    </li>}
    </nav>;
}

export default NavBar;
