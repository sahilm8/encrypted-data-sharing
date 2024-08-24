import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import AuthPage from './pages/authPage/AuthPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App
