import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* Homepage containing main details */}
          <li><Link to="/">Home</Link></li>          
          {/* Easter Egg Room */}
          <li><Link to="/playroom">Play Room</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
