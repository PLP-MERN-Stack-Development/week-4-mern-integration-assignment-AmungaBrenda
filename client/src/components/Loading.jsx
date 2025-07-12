import React from 'react'

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p style={{ marginTop: '1rem', color: '#666' }}>{message}</p>
    </div>
  )
}

export default Loading