import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <p>
        <Link to="/articles">Articles</Link>
      </p>
      <p>
        <Link to="/topics">Topics</Link>
      </p>
    </nav>
  );
};

export default Navbar;
