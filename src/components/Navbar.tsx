import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(0, 0 0, 0.5)',
        color: 'rgb(144, 202, 249, 0.5)',
        padding: '1rem',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60px',
        height: '100vh',
        transition: 'width 0.3s ease',
        zIndex: 100,
      }}
    >
      <div className="flex flex-col items-center space-y-20">
        <Link to="/" onClick={() => setActiveLink("/")} style={{ color: activeLink === "/" ? 'whitesmoke' : 'rgb(144, 202, 249, 0.5)' }}>
          <i className="fa-solid fa-house fa-xl hover:text-blue-50" title='Home'></i>
        </Link>Home
        <Link to="/demos" onClick={() => setActiveLink("/demos")} style={{ color: activeLink === "/demos" ? 'whitesmoke' : 'rgb(144, 202, 249, 0.5)' }}>
          <i className="fa-solid fa-play fa-xl hover:text-blue-50" title='Demos'></i>
        </Link>Demos
        <Link to="/about" onClick={() => setActiveLink("/about")} style={{ color: activeLink === "/about" ? 'whitesmoke' : 'rgb(144, 202, 249, 0.5)' }}>
          <i className="fa-solid fa-address-card fa-xl hover:text-blue-50" title='About'></i>
        </Link>About
        <Link to="/contact" onClick={() => setActiveLink("/contact")} style={{ color: activeLink === "/contact" ? 'whitesmoke' : 'rgb(144, 202, 249, 0.5)' }}>
          <i className="fa-solid fa-envelope fa-xl hover:text-blue-50" title='Contact Us'></i>
        </Link>Contact
      </div>
    </nav>
  );
}

export default Navbar;
