import { useAuth0 } from '@auth0/auth0-react'
import './profilePage.css'

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <div className="profile-page">
      {isLoading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        isAuthenticated && (
          <div className="profile-container">
            <h2 className="profile-heading">Profile</h2>
            <img
              className="profile-image"
              src={user!.picture}
              alt={user!.name}
            />
            <h2 className="profile-info">{user!.name}</h2>
            <p className="profile-info">{user!.email}</p>
          </div>
        )
      )}
    </div>
  )
}

export default ProfilePage
