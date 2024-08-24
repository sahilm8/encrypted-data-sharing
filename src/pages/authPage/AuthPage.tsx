import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './authPage.css'

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-heading">
          Encrypted Data Sharing<span className="cursor">|</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
