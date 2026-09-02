import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth.jsx'

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logoutUser, user } = useAuth();
  const isAdmin = !!user?.isAdmin;

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a href="/"><img src="/dp5.png" alt="" /></a>
          </div>

          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

              {isLoggedIn ? (
                <>
                  {isAdmin && (
                    <li>
                      <NavLink to="/admin" className="nav-btn nav-btn-dashboard">Dashboard</NavLink>
                    </li>
                  )}

                  <li>
                    <button type="button" className="nav-btn nav-btn-logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><NavLink to="/login" className="nav-btn nav-btn-outline">Login</NavLink></li>
                  <li><NavLink to="/signup" className="nav-btn nav-btn-primary">Signup</NavLink></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar