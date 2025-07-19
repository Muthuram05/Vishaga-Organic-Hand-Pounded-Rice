import { Link, useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";
import { DOMAIN_URL } from "../../constant";

export default function Navbar({ setIsLoggedIn, isLoggedIn, isAdminLoggedIn, setIsAdminLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook

  const handleLogout = async () => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(`${DOMAIN_URL}logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      localStorage.removeItem("auth_token"); // Remove token on successful logout
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('is_admin');
    setIsAdminLoggedIn(false);
    navigate('/admin/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span>Handmade Rice Co.</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/home" className={location.pathname === '/home' ? 'active-nav-link' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active-nav-link' : ''}>Products</Link>
          </li>
          <li>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active-nav-link' : ''}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-nav-link' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/profile" className={location.pathname === '/profile' ? 'active-nav-link' : ''}>Profile</Link>
          </li>
          {isAdminLoggedIn ? (
            <>
              <li>
                <Link to="/admin/dashboard" className={location.pathname.startsWith('/admin') ? 'active-nav-link' : ''}>Admin</Link>
              </li>
              <li>
                <button onClick={handleAdminLogout}>Admin Logout</button>
              </li>
            </>
          ) : isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login" className={location.pathname === '/login' ? 'active-nav-link' : ''}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
