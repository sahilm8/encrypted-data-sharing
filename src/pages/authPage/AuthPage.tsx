import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './authPage.css'

const AuthPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  const handleAuthenticate = () => {
    loginWithRedirect()
  }

  const handleAbout = () => {
    alert('About Page - EDS (Encrypted Data Sharing)')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-heading">
          Encrypted Data Sharing <span className="cursor">|</span>
        </h1>
        <button onClick={handleAuthenticate} className="auth-button">
          Authenticate
        </button>
        <button onClick={handleAbout} className="auth-button">
          About
        </button>
      </div>
    </div>
  )
}

export default AuthPage
