import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos/:slug" element={<ServicePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
