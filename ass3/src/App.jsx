import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'
const App = () => {
  return (
    <div className='container'>
      <Router>
        <nav className='list-container'>
          <ul className='list'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </Router>
    </div>
  )
}

export default App
