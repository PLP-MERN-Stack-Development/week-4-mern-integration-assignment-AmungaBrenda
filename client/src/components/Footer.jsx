import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{ marginBottom: '1rem' }}>
          <h3>MERN Blog</h3>
          <p>A modern blogging platform built with MongoDB, Express.js, React, and Node.js</p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
        
        <div style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} MERN Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer