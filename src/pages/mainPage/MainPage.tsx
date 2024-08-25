import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './mainPage.css'

const MainPage: React.FC = () => {
  const navigate = useNavigate()
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  return (
    <div className="main-page">
      <div className="main-container">
        <h1 className="main-heading">Encrypted Data Sharing</h1>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()} className="main-button">
            Authenticate
          </button>
        )}
        <button
          onClick={() => {
            navigate('/about')
          }}
          className="main-button"
        >
          About
        </button>
        {isAuthenticated && (
          <button onClick={() => logout()} className="main-button">
            Sign Out
          </button>
        )}
      </div>
    </div>
  )
}

export default MainPage
