import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components here
// import Home from './components/Home';
// import About from './components/About';
// import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Blog App</h1>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App;