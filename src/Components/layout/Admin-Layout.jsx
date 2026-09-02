import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Admin-Layout.css'

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      {/* Dark Sidebar Navigation */}
      <aside className="sidebar">
        {/* Brand Logo/Header */}
        <div className="sidebar-brand">
          <span className="brand-badge">A</span>
          <h1 className="brand-title">
            Admin<span>Portal</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/admin/users"
                className={({ isActive }) => 
                  `nav-link users-link ${isActive ? 'active' : ''}`
                }
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Users
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/admin/contacts"
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacts
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/admin/services"
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area + Footer Container */}
      <div className="main-wrapper">
        <main className="main-content">
          <Outlet />
        </main>

       
      </div>
    </div>
  )
}

export default AdminLayout