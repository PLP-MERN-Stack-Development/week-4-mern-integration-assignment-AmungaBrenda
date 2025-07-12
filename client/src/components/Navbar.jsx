import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="navbar-brand">
            MERN Blog
          </Link>
          
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/posts" className="nav-link">Posts</Link>
            </li>
            <li>
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
            
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/create-post" className="nav-link">Write</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li>
                  <span className="nav-link" style={{ color: '#007bff' }}>
                    Welcome, {user?.name}
                  </span>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-secondary"
                    style={{ marginLeft: '10px' }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="btn btn-primary">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar