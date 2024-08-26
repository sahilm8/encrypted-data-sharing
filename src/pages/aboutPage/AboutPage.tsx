import React from 'react'
import './aboutPage.css'

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-heading">Encrypted Data Sharing</h1>
        <h2 className="about-subheading">Secure and Private Data Exchange</h2>
        <p className="about-description">
          EDS is a platform designed to provide secure and private data exchange
          which ensures that your data remains protected through end-to-end
          encryption. Whether you're sharing files with colleagues or storing
          sensitive information, EDS ensures that your data is safe from
          unauthorized access.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
