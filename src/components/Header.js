import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <ul>
          <Link to="/apis/cats/">
            <li>Cats</li>
          </Link>
          <Link to="/apis/quotes">
            <li>Quotes</li>
          </Link>
          <Link to="/apis/avatars">
            <li>Avatars</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
