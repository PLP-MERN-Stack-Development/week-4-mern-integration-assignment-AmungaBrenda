import React, { useState } from 'react'
import { debounce } from '../utils/helpers'

const SearchBar = ({ onSearch, placeholder = "Search posts..." }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = debounce((term) => {
    onSearch(term)
  }, 300)

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="form-control"
          style={{
            paddingRight: '45px',
            fontSize: '16px',
            height: '45px'
          }}
        />
        <button
          type="submit"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#007bff'
          }}
        >
          🔍
        </button>
      </div>
    </form>
  )
}

export default SearchBar