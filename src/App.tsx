import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/authPage/AuthPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App
