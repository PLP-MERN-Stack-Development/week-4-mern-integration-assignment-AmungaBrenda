import React from 'react'

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="alert alert-error">
      <h3>Oops! Something went wrong</h3>
      <p>{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry} 
          className="btn btn-primary"
          style={{ marginTop: '10px' }}
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage