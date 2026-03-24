import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../index.css';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when location changes or link clicked
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Artus Engenharia" className="logo-image" />
                </Link>
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className={`header-right ${mobileMenuOpen ? 'active' : ''}`}>
                <nav className="nav">
                    <ul>
                        <li><a href="/#home" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
                        <li><a href="/#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a></li>
                        <li><a href="/#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
                        <li><a href="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfólio</a></li>
                    </ul>
                </nav>

                <a href="/#contato" className="btn btn-cta" onClick={() => setMobileMenuOpen(false)}>
                    Fale conosco
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;
