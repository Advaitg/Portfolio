import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-header">
        <div className="brand">
          <img src="/src/assets/B.png" width="30rem" style={{ paddingRight: '10px' }} />
          A.G.
        </div>

        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-button">
            {theme === 'light' ? '🌘︎' : '🔆'}
          </button>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setMenuOpen(false)}>About Me</Link></li>
          <li><Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;