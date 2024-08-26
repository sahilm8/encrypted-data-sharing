import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './mainPage.css'

const MainPage: React.FC = () => {
  const navigate = useNavigate()
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
  }

  return (
    <div className="main-page">
      {isLoading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <>
          {!isAuthenticated && (
            <div className="main-container">
              <h1 className="main-heading">Encrypted Data Sharing</h1>
              <button
                onClick={() => loginWithRedirect()}
                className="main-button"
              >
                Authenticate
              </button>
              <button
                onClick={() => {
                  navigate('/about')
                }}
                className="main-button"
              >
                About
              </button>
            </div>
          )}
          {isAuthenticated && (
            <div className="main-container">
              <h1 className="main-heading">Encrypted Data Sharing</h1>
              <button
                onClick={() => navigate('/profile')}
                className="main-button"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  navigate('/about')
                }}
                className="main-button"
              >
                About
              </button>
              <button
                onClick={() => {
                  logout()
                }}
                className="main-button"
              >
                Log out
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MainPage
