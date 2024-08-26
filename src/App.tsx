import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ProfilePage from './pages/profilePage/ProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
